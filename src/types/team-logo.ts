import  ATL_logo  from "../assets/badges/ATL.png";
import  BKN_logo  from "../assets/badges/BKN.png";
import  BOS_logo  from "../assets/badges/BOS.png";
import  CHA_logo  from "../assets/badges/CHA.png";
import  CHI_logo  from "../assets/badges/CHI.png";
import  CLE_logo  from "../assets/badges/CLE.png";
import  DAL_logo  from "../assets/badges/DAL.png";
import  DEN_logo  from "../assets/badges/DEN.png";
import  DET_logo  from "../assets/badges/DET.png";
import  GSW_logo  from "../assets/badges/GSW.png";
import  HOU_logo  from "../assets/badges/HOU.png";
import  IND_logo  from "../assets/badges/IND.png";
import  LAC_logo  from "../assets/badges/LAC.png";
import  LAL_logo  from "../assets/badges/LAL.png";
import  MEM_logo  from "../assets/badges/MEM.png";
import  MIA_logo  from "../assets/badges/MIA.png";
import  MIL_logo  from "../assets/badges/MIL.png";
import  MIN_logo  from "../assets/badges/MIN.png";
import  NOP_logo  from "../assets/badges/NOP.png";
import  NYK_logo  from "../assets/badges/NYK.png";
import  OKC_logo  from "../assets/badges/OKC.png";
import  ORL_logo  from "../assets/badges/ORL.png";
import  PHI_logo  from "../assets/badges/PHI.png";
import  PHX_logo  from "../assets/badges/PHX.png";
import  POR_logo  from "../assets/badges/POR.png";
import  SAC_logo  from "../assets/badges/SAC.png";
import  SAS_logo  from "../assets/badges/SAS.png";
import  TOR_logo  from "../assets/badges/TOR.png";
import  UTA_logo  from "../assets/badges/UTA.png";
import  WAS_logo  from "../assets/badges/WSH.png";

export class  TeamLogo {

    private map = new Map<string,any>();

    constructor() {
        this.map.set("ATL", ATL_logo);
        this.map.set("BKN", BKN_logo);
        this.map.set("BOS", BOS_logo);
        this.map.set("CHA", CHA_logo);
        this.map.set("CHI", CHI_logo);
        this.map.set("CLE", CLE_logo);
        this.map.set("DAL", DAL_logo);
        this.map.set("DEN", DEN_logo);
        this.map.set("DET", DET_logo);
        this.map.set("GSW", GSW_logo);
        this.map.set("HOU", HOU_logo);
        this.map.set("IND", IND_logo);
        this.map.set("LAC", LAC_logo);
        this.map.set("LAL", LAL_logo);
        this.map.set("MEM", MEM_logo);
        this.map.set("MIA", MIA_logo);
        this.map.set("MIL", MIL_logo);
        this.map.set("MIN", MIN_logo);
        this.map.set("NOP", NOP_logo);
        this.map.set("NYK", NYK_logo);
        this.map.set("OKC", OKC_logo);
        this.map.set("ORL", ORL_logo);
        this.map.set("PHI", PHI_logo);
        this.map.set("PHX", PHX_logo);
        this.map.set("POR", POR_logo);
        this.map.set("SAC", SAC_logo);
        this.map.set("SAS", SAS_logo);
        this.map.set("TOR", TOR_logo);    
        this.map.set("UTA", UTA_logo);
        this.map.set("WAS", WAS_logo);   
    }

    public getLogo(team_abbr: string): string {
        return this.map.get(team_abbr);
    }
    
}


