import AndiLaneImage from "../assets/images/andi-lane.png";
import DrewCanoImage from "../assets/images/drew-cano.png";
import KateMorrisonImage from "../assets/images/kate-morrison.png";
import NatalieCraigImage from "../assets/images/natalie-craig.png";
import KorayOkumusImage from "../assets/images/koray-okumus.png";
import OrnaldinoDiggsImage from "../assets/images/ornaldino-diggs.png";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";

export const CONTACTS = [
  {
    name: "Natalie Craig",
    avatar: NatalieCraigImage,
  },
  {
    name: "Drew Cano",
    avatar: DrewCanoImage,
  },
  {
    name: "Ornaldino Diggs",
    avatar: OrnaldinoDiggsImage,
  },
  {
    name: "Andi Lane",
    avatar: AndiLaneImage,
  },
  {
    name: "Kate Morrison",
    avatar: KateMorrisonImage,
  },
  {
    name: "Koray Okumus",
    avatar: KorayOkumusImage,
  },
];

export const USERS = [
  {
    name: "Arush Bhatia",
    avatar: user1,
  },
  {
    name: "Aman Choudhary",
    avatar: user2,
    isDefault: true,
  },
  {
    name: "Saima Khan",
    avatar: user3,
  },
  {
    name: "Rohit Sharma",
    avatar: user4,
  },
];

export const DEFAULT_USER = {
  name: "Aman Choudhary",
  avatar: user2,
  isDefault: true,
};

export const RIGHT_PANEL_DATA = {
  notifications: [
    {
      message: "You have a bug that needs...",
      time: "Just now",
      notificationType: "BUG",
    },
    {
      message: "New user registered",
      time: "59 minutes ago",
      notificationType: "USER_REGISTERED",
    },
    {
      message: "You have a bug that needs...",
      time: "12 hours ago",
      notificationType: "BUG",
    },
    {
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      notificationType: "USER_SUBSCRIPTION",
    },
  ],
  activities: [
    {
      message: "You have a bug that needs...",
      time: "Just now",
      user: USERS[0],
    },
    {
      message: "Released a new version",
      time: "59 minutes ago",
      user: USERS[1],
    },
    {
      message: "Submitted a bug",
      time: "12 hours ago",
      user: USERS[2],
    },
    {
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      user: USERS[3],
    },
    {
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      user: USERS[0],
    },
  ],
  contacts: [
    {
      name: "Natalie Craig",
      user: CONTACTS[0],
      status: "Online",
    },
    {
      name: "Drew Cano",
      user: CONTACTS[1],
      status: "Away",
    },
    {
      name: "Ornaldino Diggs",
      user: CONTACTS[2],
      status: "Online",
    },
    {
      name: "Andi Lane",
      user: CONTACTS[3],
      status: "Busy",
    },
    {
      name: "Kate Morrison",
      user: CONTACTS[4],
      status: "Online",
    },
    {
      name: "Koray Okumus",
      user: CONTACTS[5],
      status: "Away",
    },
  ],
};
