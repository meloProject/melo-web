import React, {Component} from 'react';
import DOM from 'react-dom';
import _ from 'underscore';

export default class Main extends Component {
    componentDidMount() {
        let mutator = document.querySelector(".ul_mutator");
        mutator.addEventListener("animationend", (event)=> {

            if (event.animationName != "inputChange") return; 
            var iconType = document.getElementById("icon_type");
            iconType.className = "icon_type_animate";

            // start animation circles quest.
            var iter = 200;
            var executedAni = 0;
            var circles = document.querySelectorAll(".quest_circles > li");
            _.each(circles, (value, key)=> {
                setTimeout(()=> {
                    value.className = "circleAni";
                    executedAni++;
                    if(circles.length == executedAni)  {
                        circles[0].className = circles[0].className + " circleSelected";
                    }
                }, iter);
                if(key)
                iter += iter;
            });
        });
    }

    render() {
        return (
              <div className="main-main">
                <div className="main__st_top"></div>
                <div className="main__st_mid">
                    <div className="conta_input_mutator">
                        <ul className="quest_circles">
                            <li className="classAut0"></li>
                            <li className="other"></li>
                            <li className="start"></li>
                        </ul>
                        <div className="con_inputs_mutator">
                            <ul className="ul_mutator">
                                <li className="icon_type" id="icon_type"><i className="child icon"></i></li>
                                <li className="input_mut"><input placeholder="tu usuario!" type="text" className="input_mutator"/></li>
                                <li className="icon_arrow"><i className="chevron down icon"></i></li>
                            </ul>
                       </div>
                    </div>
                </div>
                <div className="main__st_bot"></div> 
              </div>
      )
  }
};

