 'reach 0.1';

const thresh_arr = Array(UInt, 3);

const commonInterface = {
    informTimeout: Fun([], Null),
    getThreshold: Fun([Array(UInt, 3), UInt], UInt),
    seeDone: Fun([], Null),
}

const deadline = 10;

export const main = Reach.App(
        {},
        [Participant('Alice', {
            ...commonInterface,
            goal: UInt,
            fundraiser1: UInt,
            fundraiser2: UInt,
            fundraiser3: UInt,
            threshold: thresh_arr,
            setGoal: Fun([], UInt), //sets the goal for the fundraising campaign and returns it
            showBobAttached: Fun([], Null),
        }),
        Participant('Bob', {
            ...commonInterface,
            acceptGoal: Fun([UInt], Null), //donates some amount of money to the goal and returns that it
            // keepGoing: Fun([], Bool),
            yay: UInt,
            nay: UInt,
            seeDoneVoting: Fun([], Null),
            goBackToVote: Fun([], Null),
        })],
        (A, B) => {

            //Utility to inform timeouts
            const informTimeout = () => {
                each([A, B], () => {
                    interact.informTimeout();
                });
            };

            //Alice sets the goal and thresholds
            A.only(() => {
                const goal = declassify(interact.goal);
                const threshold = declassify(interact.threshold);
            });

            //Alice publishes goal and thresholds
            A.publish(goal, threshold);
            commit();

            //Inform all parties that the goal were published

            // commit();

            //Bobs accept the goal and thresholds
            B.only(() => {
                const goalAccepted = declassify(interact.acceptGoal(goal));
                // const firstRaise = declassify(interact.donate());
            })
            B.publish(goalAccepted).pay(goal);
            // commit();

            A.only(() => {
                interact.showBobAttached();
            })
            const bal = balance();

            commit();
            
            A.only(() => {
                const amt = declassify(interact.fundraiser1);
            })

            A.publish(amt);

            if (bal < amt) {
                transfer(balance()).to(A);
            } else {
                transfer(amt).to(A);
            }
            commit();
            
            A.only(() => {
                const t1 = declassify(interact.fundraiser2);
            })
            A.publish(t1);
            commit();
            
            A.only(() => {
                const t2 = declassify(interact.fundraiser3);
            })
            A.publish(t2);

            B.only(() => {
                interact.seeDoneVoting();
            })

            //Release the remaining funds
            transfer(balance()).to(B);

            commit();

            each([A, B], () => {
                interact.seeDone();
            })
            exit();
        }
    );
