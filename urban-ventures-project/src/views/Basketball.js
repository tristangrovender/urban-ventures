import React from "react";
import bball1 from "../imgs/basketball-1.jpg";
import bball2 from "../imgs/basketball-2.jpg";
import bball3 from "../imgs/basketball-3.jpg";

function Basketball() {
    return (
        <div className="Basketball">
            <h1>BASKETBALL</h1>
            <br />
            <h2>WELCOME TO URBAN VENTURES ATHLETICS BASKETBALL</h2>
            <p>
                Urban Ventures Fall/Winter Basketball is for boys and girls
                grades 4th - 8th who are looking to improve their game in a team
                setting for the fall/winter season. Each team will practice two
                times per week for about 1.5 hours each. One of the unique
                things about the Urban Ventures program is that on Thursday each
                player will attend a Leadership Development Session either
                before or after their practice time. In these sessions your
                son/daughter will learn how to be a better Christian leader on
                and off the court. Teams will generally have a ratio of 4
                practices per 1 tournament. We believe this will help them
                improve their skills first and then have the opportunity to
                demonstrate what they learn together as a team. Each team will
                play in 6-7 tournaments and the season will conclude with a
                Championship Tournament. Team fees this season will be $400 per
                player which will include Jersey, Practice Time, Coach Fee,
                Leadership/Classroom Sessions and Insurance.
            </p>
            <img src={bball1} alt="youth basketball team with trophies" />
            <img src={bball2} alt="youth basketball team practicing" />
            <img src={bball3} alt="youth basketball team picture" />
        </div>
        // pictures go on the side?
    );
}

export default Basketball;
