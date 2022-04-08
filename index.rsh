'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (handAlice, handBob) =>
  ((handAlice + (4 - handBob)) % 3);

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handAlice =>
  forall(UInt, handBob =>
    assert(isOutcome(winner(handAlice, handBob)))));

forall(UInt, (hand) =>
  assert(winner(hand, hand) == DRAW));

const commonInterface = {
  ...hasRandom,
  getDonation: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...commonInterface,
    wager: UInt, // atomic units of currency
    deadline: 1, // time delta (blocks/rounds)
  });
  const Bob   = Participant('Bob', {
    ...commonInterface,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const amount = declassify(interact.amount);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(amount, deadline)
    .pay(amount);
  commit();

  Bob.only(() => {
    interact.acceptWager(amount);
  });
  Bob.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  // this is were deployer (or fundraise accepts fundraise from attacher)
  var outcome = ACCEPT;
  invariant( balance() == 2 * amount && isOutcome(outcome) );
  
  // if statement for ACCEPT or DECLINE
  if (outcome == ACCEPT) {
    commit();
    Alice.only(() => {
      const _donateAlice = interact.getDonation();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _donateAlice);
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice).timeout(relativeTime(deadline, () => closeTo(Bob, informTimeout)));
    commit();

    unknowable(Bob, Alice(_donateAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getDonation());
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_donateAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);

    outcome = winner(handAlice, handBob);
  }

  // while ( outcome == ACCEPT ) {
  //   commit();

  //   Alice.only(() => {
  //     const _donateAlice = interact.getDonation();
  //     const [_commitAlice, _saltAlice] = makeCommitment(interact, _donateAlice);
  //     const commitAlice = declassify(_commitAlice);
  //   });
  //   Alice.publish(commitAlice)
  //     .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
  //   commit();

  //   unknowable(Bob, Alice(_donateAlice, _saltAlice));
  //   Bob.only(() => {
  //     const handBob = declassify(interact.getDonation());
  //   });
  //   Bob.publish(handBob)
  //     .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  //   commit();

  //   Alice.only(() => {
  //     const saltAlice = declassify(_saltAlice);
  //     const handAlice = declassify(_donateAlice);
  //   });
  //   Alice.publish(saltAlice, handAlice)
  //     .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
  //   checkCommitment(commitAlice, saltAlice, handAlice);

  //   outcome = winner(handAlice, handBob);
  //   continue;
  // }

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});