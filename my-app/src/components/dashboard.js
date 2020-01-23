import React from "react";
import { Button } from "reactstrap";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <section className="Buttons">
        <div className="homeButtons">
          <Button
            color="secondary"
            className="homeButtons_ball"
            onClick={() => props.setBalls(addBall(props.balls))}
          >
            Ball
          </Button>
          <Button
            color="secondary"
            className="homeButtons__strike"
            onClick={() => {
              let values = addStrike(props.strikes, props.outs);
              props.setStrikes(values[0]);

              if (props.outs !== values[1]) {
                
                if (props.outs > values[1]) {
                  
                  if (props.whosUp === "Home") {
                    props.setWhosUp("Away");
                  } else {
                    props.setWhosUp("Home");
                  }
                }
                props.setBalls(0);
              }
              props.setOuts(values[1]);
            }}
          >
            Strike
          </Button>

          <Button
            color="secondary"
            className="awayButtons__foul"
            onClick={() => props.setStrikes(addFoul(props.strikes))}
          >
            Foul
          </Button>
          <Button
            color="secondary"
            className="awayButtons__out"
            onClick={() => {
              let values = addStrike(3, props.outs); 

              if (props.outs > values[1]) {
                
                if (props.whosUp === "Home") {
                  props.setWhosUp("Away");
                } else {
                  props.setWhosUp("Home");
                }
              }
              props.setBalls(0);
              props.setStrikes(0);
              props.setOuts(values[1]);
            }}
          >
            Out
          </Button>
          <Button
            color="secondary"
            className="awayButtons__hit"
            onClick={() => {
              if (props.whosUp === "Home") {
                props.setHomeHits(props.homeHits + 1);
              } else {
                props.setAwayHits(props.awayHits + 1);
              }
              props.setStrikes(0);
              props.setBalls(0);
            }}
          >
            Hit
          </Button>
        </div>
      </section>
    </div>
  );
};

const addBall = prevCount => {
  let newCount = prevCount + 1;

  if (newCount > 3) {
    newCount = 0;
  }
  return newCount;
};

const addStrike = (prevStrike, prevOut) => {
  let newStrike = prevStrike + 1;
  let newOut = prevOut;
  console.log(prevStrike);
  if (newStrike > 2) {
    newStrike = 0;
    newOut = addOut(prevOut);
  }
  return [newStrike, newOut];
};

const addFoul = prevStrike => {
  let newStrike = prevStrike + 1;

  if (newStrike > 2) {
    newStrike = 2;
  }

  return newStrike;
};

const addOut = prevOut => {
  let newOut = prevOut + 1;

  if (newOut > 2) {
    newOut = 0;
  }

  return newOut;
};

export default Dashboard;
export { addBall, addStrike, addFoul, addOut };