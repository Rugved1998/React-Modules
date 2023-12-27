import React from "react";
import styles from "./TooltipComp.module.css";
import Tooltip from '@mui/material/Tooltip';
import { Chip } from "@mui/material";
import Image from "../../assets/Album.png";

function ToolTipComp(){
   return(
   <div className={styles.album}>
    <div children={styles.content}>
    <h5>
        Allows users to see numbers of songs in album
    </h5>
    <h5>
        upon hovering over the Album card
    </h5>

    </div>
    <div>
    <Tooltip  title={`47 songs`} placement="top" arrow>
                        
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={Image} alt="album" loading="lazy"/>
                                <div className={styles.banner}>
                                <Chip label={`12417 follows`} 
                                size="small" 
                                className={styles.chip} />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{`Light Hearted childhood songs`}</p>
                            </div>
                        </div>
                    
                    </Tooltip>
    </div>
   </div>
   );


}

export default ToolTipComp;
