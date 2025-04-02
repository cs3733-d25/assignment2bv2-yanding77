// src/components/List1.tsx
import React from 'react';

const List2: React.FC = () => {
    return (
        <>
            <p> List of Modes in Splatoon 3:</p>
            <ol>
                <li>Turf War: In this mode, your team must control the most turf by having it be painted in your
                    team's color at the end of the three minute timer.
                </li>
                <li>Splat Zones: In this mode, your team must control the Splat Zone (or Zones, sometimes there are two), by
                    having at least 80% of the zone painted in your color.
                    When you have control, you will score points and if you reach 100 points, you win by Knockout.
                    Otherwise, whatever team has more points at the end wins.
                    If you lose control of the Zone to the enemy team, you will be assigned a penalty equal to 75% of the
                    amount you scored during that control, and must clear your penalty before you can keep scoring points.
                </li>
                <li>Tower Control: In this mode, your team must ride the tower found in the center of the stage into the
                    enemy team's base.
                    The tower follows a set path and will occasionally stop at checkpoints, where the tower will remain for
                    a certain amount of time before moving on.
                    If a checkpoint is broken through, then the tower will not need to stop there again.
                    The first team to bring the tower to the end of its track first wins. If neither team does so in 5
                    minutes, the winner is whoever moved it farther.
                </li>
                <li>Rainmaker: In this mode, your team must carry a superweapon called the Rainmaker into the other team's
                    base.
                    The Rainmaker is protected by a shield that must be destroyed before it can be picked up, and while the
                    Rainmaker is powerful, it can be tricky to push forward with since you lose access to your special and
                    sub weapons, and get a movement penalty when holding it.
                    The first team to dunk the Rainmaker on the pedestal in the enemy team's base will win. If neither team
                    does so in 5 minutes, the team that moved it closest to the goal pedestal will win.
                </li>
                <li>Clam Blitz: In this mode, your team must collect clams scattered around the map and bring them to the
                    clam basket in the enemy team's base to score.
                    The basket has a shield that can be broken by a Power Clam, formed when any player holds 8 clams at the
                    same time.
                    The Power Clam must be scored first as a result, but more Power Clams can be scored after the shield is
                    broken.
                    When scoring, Power Clams count as 20 points, and normal clams count as 3 points. The first team to
                    score 100 points wins the game. If neither team does in 5 minutes, whichever team has scored more points
                    in that time will win.
                    When the basket's barrier is broken, you have ten seconds to score clams before it closes. Scoring a
                    normal clam will add 3 seconds to this timer, and a power clam will fully reset it to 10 seconds. The
                    timer has a cap of 10 seconds.
                    If the basket closes, the team is assigned a penalty equal to 50% of the scored points, which must be
                    cleared before new points can be scored.
                </li>
            </ol>
        </>
    );
}

export default List2;
