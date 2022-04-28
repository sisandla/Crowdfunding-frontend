// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc0, ctc1],
      4: [ctc0, ctc0, ctc1],
      6: [ctc0, ctc0, ctc1],
      7: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v110 = stdlib.protect(ctc0, interact.fundraiser1, 'for Alice\'s interact field fundraiser1');
  const v111 = stdlib.protect(ctc0, interact.fundraiser2, 'for Alice\'s interact field fundraiser2');
  const v112 = stdlib.protect(ctc0, interact.fundraiser3, 'for Alice\'s interact field fundraiser3');
  const v113 = stdlib.protect(ctc0, interact.goal, 'for Alice\'s interact field goal');
  const v114 = stdlib.protect(ctc1, interact.threshold, 'for Alice\'s interact field threshold');
  
  const txn1 = await (ctc.sendrecv({
    args: [v113, v114],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v120, v121], secs: v123, time: v122, didSend: v34, from: v119 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v120, v121], secs: v123, time: v122, didSend: v34, from: v119 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v127], secs: v129, time: v128, didSend: v44, from: v126 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showBobAttached(), {
    at: './index.rsh:66:41:application',
    fs: ['at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
    msg: 'showBobAttached',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v119, v120, v126, v110],
    evt_cnt: 1,
    funcNum: 2,
    lct: v128,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v138], secs: v140, time: v139, didSend: v57, from: v137 } = txn3;
      
      ;
      const v141 = stdlib.addressEq(v119, v137);
      ;
      const v142 = stdlib.lt(v120, v138);
      if (v142) {
        const v147 = stdlib.sub(v120, v120);
        sim_r.txns.push({
          amt: v120,
          kind: 'from',
          to: v119,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        }
      else {
        const v178 = stdlib.sub(v120, v138);
        sim_r.txns.push({
          amt: v138,
          kind: 'from',
          to: v119,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v138], secs: v140, time: v139, didSend: v57, from: v137 } = txn3;
  ;
  const v141 = stdlib.addressEq(v119, v137);
  stdlib.assert(v141, {
    at: './index.rsh:76:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v142 = stdlib.lt(v120, v138);
  if (v142) {
    const v147 = stdlib.sub(v120, v120);
    ;
    const txn4 = await (ctc.sendrecv({
      args: [v119, v126, v147, v111],
      evt_cnt: 1,
      funcNum: 3,
      lct: v139,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:90:15:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v151], secs: v153, time: v152, didSend: v76, from: v150 } = txn4;
        
        ;
        const v154 = stdlib.addressEq(v119, v150);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v151], secs: v153, time: v152, didSend: v76, from: v150 } = txn4;
    ;
    const v154 = stdlib.addressEq(v119, v150);
    stdlib.assert(v154, {
      at: './index.rsh:90:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v119, v126, v147, v112],
      evt_cnt: 1,
      funcNum: 4,
      lct: v152,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:98:15:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v158], secs: v160, time: v159, didSend: v85, from: v157 } = txn5;
        
        ;
        const v161 = stdlib.addressEq(v119, v157);
        ;
        sim_r.txns.push({
          amt: v147,
          kind: 'from',
          to: v126,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v158], secs: v160, time: v159, didSend: v85, from: v157 } = txn5;
    ;
    const v161 = stdlib.addressEq(v119, v157);
    stdlib.assert(v161, {
      at: './index.rsh:98:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc2, await interact.seeDone(), {
      at: './index.rsh:109:33:application',
      fs: ['at ./index.rsh:108:17:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
      msg: 'seeDone',
      who: 'Alice'
      });
    
    return;
    
    
    
    
    }
  else {
    const v178 = stdlib.sub(v120, v138);
    ;
    const txn4 = await (ctc.sendrecv({
      args: [v119, v126, v178, v111],
      evt_cnt: 1,
      funcNum: 5,
      lct: v139,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:90:15:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v182], secs: v184, time: v183, didSend: v76, from: v181 } = txn4;
        
        ;
        const v185 = stdlib.addressEq(v119, v181);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v182], secs: v184, time: v183, didSend: v76, from: v181 } = txn4;
    ;
    const v185 = stdlib.addressEq(v119, v181);
    stdlib.assert(v185, {
      at: './index.rsh:90:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v119, v126, v178, v112],
      evt_cnt: 1,
      funcNum: 6,
      lct: v183,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:98:15:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v189], secs: v191, time: v190, didSend: v85, from: v188 } = txn5;
        
        ;
        const v192 = stdlib.addressEq(v119, v188);
        ;
        sim_r.txns.push({
          amt: v178,
          kind: 'from',
          to: v126,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v189], secs: v191, time: v190, didSend: v85, from: v188 } = txn5;
    ;
    const v192 = stdlib.addressEq(v119, v188);
    stdlib.assert(v192, {
      at: './index.rsh:98:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc2, await interact.seeDone(), {
      at: './index.rsh:109:33:application',
      fs: ['at ./index.rsh:108:17:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
      msg: 'seeDone',
      who: 'Alice'
      });
    
    return;
    
    
    
    
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v120, v121], secs: v123, time: v122, didSend: v34, from: v119 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptGoal(v120), {
    at: './index.rsh:59:68:application',
    fs: ['at ./index.rsh:58:19:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'acceptGoal',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v119, v120, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v122,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v120, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v127], secs: v129, time: v128, didSend: v44, from: v126 } = txn2;
      
      sim_r.txns.push({
        amt: v120,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v127], secs: v129, time: v128, didSend: v44, from: v126 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v138], secs: v140, time: v139, didSend: v57, from: v137 } = txn3;
  ;
  const v141 = stdlib.addressEq(v119, v137);
  stdlib.assert(v141, {
    at: './index.rsh:76:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v142 = stdlib.lt(v120, v138);
  if (v142) {
    const v147 = stdlib.sub(v120, v120);
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v151], secs: v153, time: v152, didSend: v76, from: v150 } = txn4;
    ;
    const v154 = stdlib.addressEq(v119, v150);
    stdlib.assert(v154, {
      at: './index.rsh:90:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v158], secs: v160, time: v159, didSend: v85, from: v157 } = txn5;
    ;
    const v161 = stdlib.addressEq(v119, v157);
    stdlib.assert(v161, {
      at: './index.rsh:98:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc2, await interact.seeDoneVoting(), {
      at: './index.rsh:101:39:application',
      fs: ['at ./index.rsh:100:19:application call to [unknown function] (defined at: ./index.rsh:100:23:function exp)'],
      msg: 'seeDoneVoting',
      who: 'Bob'
      });
    
    ;
    stdlib.protect(ctc2, await interact.seeDone(), {
      at: './index.rsh:109:33:application',
      fs: ['at ./index.rsh:108:17:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
      msg: 'seeDone',
      who: 'Bob'
      });
    
    return;
    
    
    
    
    }
  else {
    const v178 = stdlib.sub(v120, v138);
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v182], secs: v184, time: v183, didSend: v76, from: v181 } = txn4;
    ;
    const v185 = stdlib.addressEq(v119, v181);
    stdlib.assert(v185, {
      at: './index.rsh:90:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v189], secs: v191, time: v190, didSend: v85, from: v188 } = txn5;
    ;
    const v192 = stdlib.addressEq(v119, v188);
    stdlib.assert(v192, {
      at: './index.rsh:98:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc2, await interact.seeDoneVoting(), {
      at: './index.rsh:101:39:application',
      fs: ['at ./index.rsh:100:19:application call to [unknown function] (defined at: ./index.rsh:100:23:function exp)'],
      msg: 'seeDoneVoting',
      who: 'Bob'
      });
    
    ;
    stdlib.protect(ctc2, await interact.seeDone(), {
      at: './index.rsh:109:33:application',
      fs: ['at ./index.rsh:108:17:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
      msg: 'seeDone',
      who: 'Bob'
      });
    
    return;
    
    
    
    
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEGQAMEAgUHICYCAQAAIjUAMRhBAywpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEEDEABWUkhBwxAAKlJJAxAAEokEkQhCDQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABHDt73o0/xZQsDQDVwAgMQASRLEisgE0AyVbsggjshA0A1cgILIHs0ICVkgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4lWzX9STUFFzX8gASBqprPNPwWULA0/zEAEkQ0/zT+UDT9FlAoSwFXAEhnSCEINQEyBjUCQgIZSSEFDEAASEghBTQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABPmLr3g0/xZQsDQDVwAgMQASRLEisgE0AyVbsggjshA0A1cgILIHs0IBrkghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JVs1/Uk1BRc1/IAE1Axs1jT8FlCwNP8xABJENP80/lA0/RZQKEsBVwBIZ0ghBTUBMgY1AkIBcEkjDEABA0khBgxAAKtIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hCVs1/lcoIDX9STUFFzX8gASXTvcXNPwWULA0/zEAEkQ0/jT8DEEAMjT+SQk1+7EisgE0/rIII7IQNP+yB7M0/zT9UDT7FlAoSwFXAEhnSCEENQEyBjUCQgDqNP40/Ak1+7EisgE0/LIII7IQNP+yB7M0/zT9UDT7FlAoSwFXAEhnSCQ1ATIGNQJCALhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQlbNf5JNQU1/YAEkqNQgjT9ULA0/ogAwDT/NP4WUDEAUChLAVcASGdIIQY1ATIGNQJCAGdIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwgYNf6ABICOxPo0/xZQNP5QsIGgjQaIAHExADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGSEHEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256[3]",
                "name": "v121",
                "type": "uint256[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256[3]",
                "name": "v121",
                "type": "uint256[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v127",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v127",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v151",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200137f3803806200137f833981016040819052620000269162000212565b60008055436003556040517fdd0d350e26fe766c4f3b6603d395c2a37d2d9686d9d0a67d0c4546b59014eb979062000060908390620002ba565b60405180910390a16200007634156007620000dc565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000d3926002929091019062000106565b50505062000340565b81620001025760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001149062000303565b90600052602060002090601f01602090048101928262000138576000855562000183565b82601f106200015357805160ff191683800117855562000183565b8280016001018555821562000183579182015b828111156200018357825182559160200191906001019062000166565b506200019192915062000195565b5090565b5b8082111562000191576000815560010162000196565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001e757620001e7620001ac565b60405290565b604051606081016001600160401b0381118282101715620001e757620001e7620001ac565b600081830360a08112156200022657600080fd5b62000230620001c2565b8351815260206080601f19840112156200024957600080fd5b62000253620001c2565b925080850151835285605f8601126200026b57600080fd5b62000275620001ed565b8060a08701888111156200028857600080fd5b604088015b81811015620002a657805184529284019284016200028d565b505084830152508101919091529392505050565b8151815260208083015180518284015281015160a0830191906040840160005b6003811015620002f957825182529183019190830190600101620002da565b5050505092915050565b600181811c908216806200031857607f821691505b602082108114156200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b61102f80620003506000396000f3fe6080604052600436106100845760003560e01c8063980b6eac11610056578063980b6eac146100ec5780639a3e3912146100ff578063a209ad4e14610112578063ab53f2c614610125578063f4cedab01461014857005b80631e93b0f11461008d57806345f70396146100b1578063552d7b8e146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610d27565b61015b565b61008b6100d2366004610d27565b61042a565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004610d27565b6105d1565b61008b61010d366004610d27565b610757565b61008b610120366004610d27565b6108d0565b34801561013157600080fd5b5061013a6109fa565b6040516100a8929190610d4a565b61008b610156366004610d27565b610a97565b61016b600260005414600d610c14565b6101858135158061017e57506001548235145b600e610c14565b60008080556002805461019790610da7565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610da7565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610df8565b9050610247604051806040016040528060008152602001600081525090565b7fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6836040516102769190610e6b565b60405180910390a161028a3415600b610c14565b81516102a2906001600160a01b03163314600c610c14565b8260200160000135826020015110156103805760208201516102c49080610e84565b8152815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610303573d6000803e3d6000fd5b50604080516060810182526000808252602080830182815283850183815287516001600160a01b0390811686528887015116909152855190526003909155436001559151909161035591839101610ea9565b60405160208183030381529060405260029080519060200190610379929190610c39565b5050505050565b6020828101516103939185013590610e84565b60208083019190915282516040516001600160a01b039091169185013580156108fc02916000818181858888f193505050501580156103d6573d6000803e3d6000fd5b50604080516060810182526000808252602080830182815283850183815287516001600160a01b03908116865288870151169091528582015190526006909155436001559151909161035591839101610ea9565b61043a6006600054146019610c14565b6104548135158061044d57506001548235145b601a610c14565b60008080556002805461046690610da7565b80601f016020809104026020016040519081016040528092919081815260200182805461049290610da7565b80156104df5780601f106104b4576101008083540402835291602001916104df565b820191906000526020600020905b8154815290600101906020018083116104c257829003601f168201915b50505050508060200190518101906104f79190610f4e565b90507f4dadf1945cf19fcec67ccb7e31757a1ad0bc533fae9b7a76582523cb8bf28f4e826040516105289190610e6b565b60405180910390a161053c34156017610c14565b8051610554906001600160a01b031633146018610c14565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600790915543600155915190916105a791839101610ea9565b604051602081830303815290604052600290805190602001906105cb929190610c39565b50505050565b6105e1600760005414601d610c14565b6105fb813515806105f457506001548235145b601e610c14565b60008080556002805461060d90610da7565b80601f016020809104026020016040519081016040528092919081815260200182805461063990610da7565b80156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b505050505080602001905181019061069e9190610f4e565b90507f47a1195f23e4ca8f87a7a744a702eeb3eb5b0d56dae31e23931e0349a611c709826040516106cf9190610e6b565b60405180910390a16106e33415601b610c14565b80516106fb906001600160a01b03163314601c610c14565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f1935050505015801561073c573d6000803e3d6000fd5b506000808055600181905561075390600290610cbd565b5050565b6107676001600054146009610c14565b6107818135158061077a57506001548235145b600a610c14565b60008080556002805461079390610da7565b80601f01602080910402602001604051908101604052809291908181526020018280546107bf90610da7565b801561080c5780601f106107e15761010080835404028352916020019161080c565b820191906000526020600020905b8154815290600101906020018083116107ef57829003601f168201915b50505050508060200190518101906108249190610f6a565b90507fc2181c40b1b03253329d7cd30c0cb2b8c24f7c72d3e1bae33dca44e26dcbc021826040516108559190610fcf565b60405180910390a161086e816020015134146008610c14565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260029095554360015587519384019490945290519582019590955293511690830152906080016105a7565b6108e06004600054146015610c14565b6108fa813515806108f357506001548235145b6016610c14565b60008080556002805461090c90610da7565b80601f016020809104026020016040519081016040528092919081815260200182805461093890610da7565b80156109855780601f1061095a57610100808354040283529160200191610985565b820191906000526020600020905b81548152906001019060200180831161096857829003601f168201915b505050505080602001905181019061099d9190610f4e565b90507f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f826040516109ce9190610e6b565b60405180910390a16109e234156013610c14565b80516106fb906001600160a01b031633146014610c14565b600060606000546002808054610a0f90610da7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3b90610da7565b8015610a885780601f10610a5d57610100808354040283529160200191610a88565b820191906000526020600020905b815481529060010190602001808311610a6b57829003601f168201915b50505050509050915091509091565b610aa76003600054146011610c14565b610ac181351580610aba57506001548235145b6012610c14565b600080805560028054610ad390610da7565b80601f0160208091040260200160405190810160405280929190818152602001828054610aff90610da7565b8015610b4c5780601f10610b2157610100808354040283529160200191610b4c565b820191906000526020600020905b815481529060010190602001808311610b2f57829003601f168201915b5050505050806020019051810190610b649190610f4e565b90507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb571482604051610b959190610e6b565b60405180910390a1610ba93415600f610c14565b8051610bc1906001600160a01b031633146010610c14565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600490915543600155915190916105a791839101610ea9565b816107535760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610c4590610da7565b90600052602060002090601f016020900481019282610c675760008555610cad565b82601f10610c8057805160ff1916838001178555610cad565b82800160010185558215610cad579182015b82811115610cad578251825591602001919060010190610c92565b50610cb9929150610cfa565b5090565b508054610cc990610da7565b6000825580601f10610cd9575050565b601f016020900490600052602060002090810190610cf79190610cfa565b50565b5b80821115610cb95760008155600101610cfb565b600060408284031215610d2157600080fd5b50919050565b600060408284031215610d3957600080fd5b610d438383610d0f565b9392505050565b82815260006020604081840152835180604085015260005b81811015610d7e57858101830151858201606001528201610d62565b81811115610d90576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610dbb57607f821691505b60208210811415610d2157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610df357600080fd5b919050565b600060608284031215610e0a57600080fd5b6040516060810181811067ffffffffffffffff82111715610e3b57634e487b7160e01b600052604160045260246000fd5b604052610e4783610ddc565b815260208301516020820152610e5f60408401610ddc565b60408201529392505050565b8135815260208083013590820152604081015b92915050565b600082821015610ea457634e487b7160e01b600052601160045260246000fd5b500390565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608101610e7e565b600060608284031215610eea57600080fd5b6040516060810181811067ffffffffffffffff82111715610f1b57634e487b7160e01b600052604160045260246000fd5b604052905080610f2a83610ddc565b8152610f3860208401610ddc565b6020820152604083015160408201525092915050565b600060608284031215610f6057600080fd5b610d438383610ed8565b600060408284031215610f7c57600080fd5b6040516040810181811067ffffffffffffffff82111715610fad57634e487b7160e01b600052604160045260246000fd5b604052610fb983610ddc565b8152602083015160208201528091505092915050565b81358152604081016020830135801515808214610feb57600080fd5b80602085015250509291505056fea264697066735822122084f3d9d507ab65f49c6e7a749fcb3ae200f28ad9367604b352fbc856e44d949f64736f6c634300080c0033`,
  BytecodeLen: 4991,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:52:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:70:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:84:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:92:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:106:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:84:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:92:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:106:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
