import React from "react";
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  h1 {
    margin: 0 0 0 0;
    color: var(--mint);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
  }
  .ascii {
    float: left;
    width: fit-content;
  }
  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }
  p {
    margin: 10px 0 10px;
    max-width: 540px;
  }
`;

const Hero = () => {
  const name = 0;
  const titles = [[
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;_     _  ___  ___      ___{"\n"}
        | | _ | ||   ||   |    |   |     {"\n"}
        | || || ||   ||   |    |   |     {"\n"}
        |       ||   ||   |    |   |     {"\n"}
        |       ||   ||   |___ |   |___  {"\n"}
        |   _   ||   ||       ||       | {"\n"}
        |__| |__||___||_______||_______| {"\n"}
      </p>,
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;__   __  __   __  __   __  _______  __   __  ___      _______  _______  _______{"\n"}
        |  | |  ||  | |  ||  |_|  ||       ||  | |  ||   |    |       ||       ||       |{"\n"}
        |  |_|  ||  | |  ||       ||    _  ||  |_|  ||   |    |    ___||_     _||_     _|{"\n"}
        |       ||  | |  ||       ||   |_| ||       ||   |    |   |___   |   |    |   |{"\n"}
        |   _   ||  |_|  ||       ||    ___||   _   ||   |___ |    ___|  |   |    |   |{"\n"}
        |  | |  ||       || ||_|| ||   |    |  | |  ||       ||   |___   |   |    |   |{"\n"}
        |__| |__||_______||_|   |_||___|    |__| |__||_______||_______|  |___|    |___|{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;__     __     __     __         __            __  __     __  __     __    __     ______   __  __     __         ______     ______   ______  {"\n"}
        /\ \  _ \ \   /\ \   /\ \       /\ \          /\ \_\ \   /\ \/\ \   /\ "-./  \   /\  == \ /\ \_\ \   /\ \       /\  ___\   /\__  _\ /\__  _\ {"\n"}
        \ \ \/ ".\ \  \ \ \  \ \ \____  \ \ \____     \ \  __ \  \ \ \_\ \  \ \ \-./\ \  \ \  _-/ \ \  __ \  \ \ \____  \ \  __\   \/_/\ \/ \/_/\ \/ {"\n"}
        &nbsp;\ \__/".~\_\  \ \_\  \ \_____\  \ \_____\     \ \_\ \_\  \ \_____\  \ \_\ \ \_\  \ \_\    \ \_\ \_\  \ \_____\  \ \_____\    \ \_\    \ \_\ {"\n"}
        &nbsp;&nbsp;\/_/   \/_/   \/_/   \/_____/   \/_____/      \/_/\/_/   \/_____/   \/_/  \/_/   \/_/     \/_/\/_/   \/_____/   \/_____/     \/_/     \/_/{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;__     __   __   __       __           __  __   __  __   __    __   ______  __  __   __       ______  ______  ______  {"\n"}
        /\ \  _ \ \ /\ \ /\ \     /\ \         /\ \_\ \ /\ \/\ \ /\ "-./  \ /\  == \/\ \_\ \ /\ \     /\  ___\/\__  _\/\__  _\ {"\n"}
        \ \ \/ ".\ \\ \ \\ \ \____\ \ \____    \ \  __ \\ \ \_\ \\ \ \-./\ \\ \  _-/\ \  __ \\ \ \____\ \  __\\/_/\ \/\/_/\ \/ {"\n"}
        &nbsp;\ \__/".~\_\\ \_\\ \_____\\ \_____\    \ \_\ \_\\ \_____\\ \_\ \ \_\\ \_\   \ \_\ \_\\ \_____\\ \_____\ \ \_\   \ \_\ {"\n"}
        &nbsp;&nbsp;\/_/   \/_/ \/_/ \/_____/ \/_____/     \/_/\/_/ \/_____/ \/_/  \/_/ \/_/    \/_/\/_/ \/_____/ \/_____/  \/_/    \/_/ {"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        888       888 d8b 888 888      888    888                                 888      888          888    888{"\n"}
        888   o   888 Y8P 888 888      888    888                                 888      888          888    888{"\n"}
        888  d8b  888     888 888      888    888                                 888      888          888    888{"\n"}
        888 d888b 888 888 888 888      8888888888 888  888 88888b.d88b.  88888b.  88888b.  888  .d88b.  888888 888888{"\n"}
        888d88888b888 888 888 888      888    888 888  888 888 "888 "88b 888 "88b 888 "88b 888 d8P  Y8b 888    888{"\n"}
        88888P Y88888 888 888 888      888    888 888  888 888  888  888 888  888 888  888 888 88888888 888    888{"\n"}
        8888P   Y8888 888 888 888      888    888 Y88b 888 888  888  888 888 d88P 888  888 888 Y8b.     Y88b.  Y88b.{"\n"}
        888P     Y888 888 888 888      888    888  "Y88888 888  888  888 88888P"  888  888 888  "Y8888   "Y888  "Y888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;__      __       ___    ___       __  __                              __       ___           __    __{"\n"}
        /\ \  __/\ \  __ /\_ \  /\_ \     /\ \/\ \                            /\ \     /\_ \         /\ \__/\ \__{"\n"}
        \ \ \/\ \ \ \/\_\\//\ \ \//\ \    \ \ \_\ \  __  __    ___ ___   _____\ \ \___ \//\ \      __\ \ ,_\ \ ,_\{"\n"}&nbsp;\ \ \ \ \ \ \/\ \ \ \ \  \ \ \    \ \  _  \/\ \/\ \ /' __` __`\/\ '__`\ \  _ `\ \ \ \   /'__`\ \ \/\ \ \/{"\n"}
        &nbsp;&nbsp;\ \ \_/ \_\ \ \ \ \_\ \_ \_\ \_   \ \ \ \ \ \ \_\ \/\ \/\ \/\ \ \ \L\ \ \ \ \ \ \_\ \_/\  __/\ \ \_\ \ \_{"\n"}
        &nbsp;&nbsp;&nbsp;\ `\___x___/\ \_\/\____\/\____\   \ \_\ \_\ \____/\ \_\ \_\ \_\ \ ,__/\ \_\ \_\/\____\ \____\\ \__\\ \__\{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;'\/__//__/  \/_/\/____/\/____/    \/_/\/_/\/___/  \/_/\/_/\/_/\ \ \/  \/_/\/_/\/____/\/____/ \/__/ \/__/{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ \_\{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/_/{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;,ggg,      gg      ,gg                        ,ggg,        gg{"\n"}
        dP""Y8a     88     ,8P       ,dPYb, ,dPYb,    dP""Y8b       88                                             ,dPYb,     ,dPYb,            I8      I8{"\n"}
        Yb, `88     88     d8'       IP'`Yb IP'`Yb    Yb, `88       88                                             IP'`Yb     IP'`Yb            I8      I8{"\n"}
        &nbsp;`"  88     88     88   gg   I8  8I I8  8I     `"  88       88                                             I8  8I     I8  8I         8888888888888888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88     88     88   ""   I8  8' I8  8'         88aaaaaaa88                                             I8  8'     I8  8'            I8      I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88     88     88   gg   I8 dP  I8 dP          88"88  gg      gg   ,ggg,,ggg,,ggg,   gg,gggg,    I8 dPgg,   I8 dP   ,ggg,     I8      I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88     88     88   88   I8dP   I8dP           88       88  I8      8I  ,8" "8P" "8P" "8,  I8P"  "Yb   I8dP" "8I  I8dP   i8" "8i    I8      I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y8    ,88,    8P   88   I8P    I8P            88       88  I8,    ,8I  I8   8I   8I   8I  I8'    ,8i  I8P    I8  I8P    I8, ,8I   ,I8,    ,I8,{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yb,,d8""8b,,dP  _,88,_,d8b,_ ,d8b,_          88       Y8,,d8b,  ,d8b,,dP   8I   8I   Yb,,I8 _  ,d8' ,d8     I8,,d8b,_  `YbadP'  ,d88b,  ,d88b,{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"88"    "88"   8P""Y88P'"Y888P'"Y88         88       `Y88P'"Y88P"`Y88P'   8I   8I   `Y8PI8 YY88888P88P     `Y88P'"Y88888P"Y88888P""Y8888P""Y88{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I8{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        oooo     oooo o88   o888  o888       ooooo ooooo                                    oooo        o888               o8     o8{"\n"}
        &nbsp;88   88  88  oooo   888   888        888   888 oooo  oooo  oo ooo oooo  ooooooooo   888ooooo    888  ooooooooo8 o888oo o888oo{"\n"}
        &nbsp;&nbsp;88 888 88    888   888   888        888ooo888  888   888   888 888 888  888    888 888   888   888 888oooooo8   888    888{"\n"}
        &nbsp;&nbsp;&nbsp;888 888     888   888   888        888   888  888   888   888 888 888  888    888 888   888   888 888          888    888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;8   8     o888o o888o o888o      o888o o888o  888o88 8o o888o888o888o 888ooo88  o888o o888o o888o  88oooo888   888o   888o{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o888{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;_       _     _    _       _   _                           _      _           _    _{"\n"}
        ( )  _  ( ) _ (_ ) (_ )    ( ) ( )                         ( )    (_ )        ( )_ ( )_{"\n"}
        | | ( ) | |(_) | |  | |    | |_| | _   _   ___ ___   _ _   | |__   | |    __  | ,_)| ,_){"\n"}
        | | | | | || | | |  | |    |  _  |( ) ( )/' _ ` _ `\( '_`\ |  _ `\ | |  /'__`\| |  | |{"\n"}
        | (_/ \_) || | | |  | |    | | | || (_) || ( ) ( ) || (_) )| | | | | | (  ___/| |_ | |_{"\n"}
        `\___x___/'(_)(___)(___)   (_) (_)`\___/'(_) (_) (_)| ,__/'(_) (_)(___)`\____)`\__)`\__){"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| |{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_){"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        oooooo   oooooo     oooo  o8o  oooo  oooo       ooooo   ooooo                                          oooo        oooo                .       .{"\n"}
        &nbsp;`888.    `888.     .8'   `"'  `888  `888       `888'   `888'                                          `888        `888              .o8     .o8{"\n"}
        &nbsp;&nbsp;`888.   .8888.   .8'   oooo   888   888        888     888  oooo  oooo  ooo. .oo.  .oo.   oo.ooooo.   888 .oo.    888   .ooooo.  .o888oo .o888oo{"\n"}
        &nbsp;&nbsp;&nbsp;`888  .8'`888. .8'    `888   888   888        888ooooo888  `888  `888  `888P"Y88bP"Y88b   888' `88b  888P"Y88b   888  d88' `88b   888     888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;`888.8'  `888.8'      888   888   888        888     888   888   888   888   888   888   888   888  888   888   888  888ooo888   888     888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`888'    `888'       888   888   888        888     888   888   888   888   888   888   888   888  888   888   888  888    .o   888 .   888 .{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`8'      `8'       o888o o888o o888o      o888o   o888o  `V88V"V8P' o888o o888o o888o  888bod8P' o888o o888o o888o `Y8bod8P'   "888"   "888"{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o888o{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        ___ __ ___________   ____        __________________________________________   _______________________{"\n"}
        7  V  V  77  77  7   7  7        7  7  77  7  77        77     77  7  77  7   7     77      77      7{"\n"}
        |  |  |  ||  ||  |   |  |        |  !  ||  |  ||  _  _  ||  -  ||  !  ||  |   |  ___!!__  __!!__  __!{"\n"}
        |  !  !  ||  ||  !___|  !___     |     ||  |  ||  7  7  ||  ___!|     ||  !___|  __|_  7  7    7  7{"\n"}
        |        ||  ||     7|     7     |  7  ||  !  ||  |  |  ||  7   |  7  ||     7|     7  |  |    |  |{"\n"}
        !________!!__!!_____!!_____!     !__!__!!_____!!__!__!__!!__!   !__!__!!_____!!_____!  !__!    !__!{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        &nbsp;__        ___ _ _   _   _                       _     _      _   _{"\n"}
        &nbsp;\ \      / (_) | | | | | |_   _ _ __ ___  _ __ | |__ | | ___| |_| |_{"\n"}
        &nbsp;&nbsp;\ \ /\ / /| | | | | |_| | | | | '_ ` _ \| '_ \| '_ \| |/ _ \ __| __|{"\n"}
        &nbsp;&nbsp;&nbsp;\ V  V / | | | | |  _  | |_| | | | | | | |_) | | | | |  __/ |_| |_{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;\_/\_/  |_|_|_| |_| |_|\__,_|_| |_| |_| .__/|_| |_|_|\___|\__|\__|{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_|{"\n"}
      </p>
    ],
    [
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        Will
      </p>,
      <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
        Humphlett
      </p>
    ]
  ]
  return (
    <StyledHeroSection>
      <div><h1><em>Hello hello, I'm</em></h1></div>
      <div>
        {titles[name]}
      </div>
      <div><h3 className="small-heading">I write code.</h3></div>
    </StyledHeroSection>
  )
};

export default Hero;
