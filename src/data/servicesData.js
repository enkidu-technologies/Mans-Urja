import { GrConnect } from "react-icons/gr";
import { RiInstallLine } from "react-icons/ri";
import {
    MdAppRegistration,
    MdApproval,
    MdOutlineLandscape
} from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaChargingStation } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";


export const allServices = {
    "Uttar Pradesh": [
        {
            category: "UPPTCL / UPPCL",
            items: [
                {
                    icon: GrConnect,
                    title: "Connectivity",
                    desc: "Grid integration for UPPTCL/UPPCL.",
                },
                {
                    icon: MdOutlineLandscape,
                    title: "LAND",
                    desc: "Support in land acquisition, documentation, and approvals for setting up renewable energy projects.",
                },
                {
                    icon: MdApproval,
                    title: "LTOA Approvals",
                    desc: "Long-Term Open Access for industries.",
                },
                {
                    icon: RiInstallLine,
                    title: "ABT Meter Installation",
                    desc: "Install ABT meters with accuracy.",
                },
                {
                    icon: CiSettings,
                    title: "WBA",
                    desc: "Wheeling and Banking Agreements.",
                },
            ],
        },
        {
            category: "Electrical Safety",
            items: [
                {
                    icon: MdAppRegistration,
                    title: "Drawing Approval",
                    desc: "Drawing approval process from authorities.",
                },
                {
                    icon: MdApproval,
                    title: "CEIG Approval",
                    desc: "Chief Electrical Inspector compliance.",
                },
            ],
        },
        {
            category: "SLDC",
            items: [
                {
                    icon: FaChargingStation,
                    title: "New Elements Charging",
                    desc: "New grid element registration.",
                },
                {
                    icon: SiCodeblocks,
                    title: "C.O.D.",
                    desc: "Commercial Operation Declaration.",
                },
            ],
        },
    ],

    Haryana: [
        {
            category: "HVPN / UHBVN / DHBVN",
            items: [
                {
                    icon: MdAppRegistration,
                    title: "SPV Registration",
                    desc: "Registration of Solar Power Projects (SPV) with the concerned authorities for compliance and recognition.",
                },
                {
                    icon: GrConnect,
                    title: "Connectivity",
                    desc: "Grid integration for UPPTCL/UPPCL.",
                },
                {
                    icon: MdOutlineLandscape,
                    title: "LAND",
                    desc: "Support in land acquisition, documentation, and approvals for setting up renewable energy projects.",
                },
                {
                    icon: MdApproval,
                    title: "LTOA Approvals",
                    desc: "Long-Term Open Access for industries.",
                },
                {
                    icon: RiInstallLine,
                    title: "ABT Meter Installation",
                    desc: "Install ABT meters with accuracy.",
                },
                {
                    icon: FaLandmark,
                    title: "Banking",
                    desc: "Assistance with Banking arrangements under state energy policies to utilize surplus generated power effectively.",
                },
            ],
        },
        {
            category: "Electrical Safety & CEIG",
            items: [
                {
                    icon: MdAppRegistration,
                    title: "Drawing Approval",
                    desc: "Drawing approval process from authorities.",
                },
                {
                    icon: MdApproval,
                    title: "CEIG Approval",
                    desc: "Chief Electrical Inspector compliance.",
                },
            ],
        },
        {
            category: "SLDC",
            items: [
                {
                    icon: FaChargingStation,
                    title: "New Elements Charging",
                    desc: "New grid element registration.",
                },
                {
                    icon: SiCodeblocks,
                    title: "C.O.D.",
                    desc: "Commercial Operation Declaration.",
                },
            ],
        },
    ],

    Uttarakhand: [
        {
            category: "UPCL / SLDC-UK",
            items: [
                {
                    icon: MdAppRegistration,
                    title: "SPV Registration",
                    desc: "Registration of Solar Power Projects (SPV) with the concerned authorities for compliance and recognition.",
                },
                {
                    icon: GrConnect,
                    title: "Connectivity",
                    desc: "Grid integration for UPPTCL/UPPCL.",
                },
                {
                    icon: MdOutlineLandscape,
                    title: "LAND",
                    desc: "Support in land acquisition, documentation, and approvals for setting up renewable energy projects.",
                },
                {
                    icon: MdApproval,
                    title: "LTOA Approvals",
                    desc: "Long-Term Open Access for industries.",
                },
                {
                    icon: RiInstallLine,
                    title: "ABT Meter Installation",
                    desc: "Install ABT meters with accuracy.",
                },
                {
                    icon: FaLandmark,
                    title: "Banking",
                    desc: "Assistance with Banking arrangements under state energy policies to utilize surplus generated power effectively.",
                },
            ],
        },
        {
            category: "Electrical Safety & CEIG",
            items: [
                {
                    icon: MdAppRegistration,
                    title: "Drawing Approval",
                    desc: "Drawing approval process from authorities.",
                },
                {
                    icon: MdApproval,
                    title: "CEIG Approval",
                    desc: "Chief Electrical Inspector compliance.",
                },
            ],
        },
        {
            category: "SLDC",
            items: [
                {
                    icon: FaChargingStation,
                    title: "New Elements Charging",
                    desc: "New grid element registration.",
                },
                {
                    icon: SiCodeblocks,
                    title: "C.O.D.",
                    desc: "Commercial Operation Declaration.",
                },
            ],
        },
    ],
};
