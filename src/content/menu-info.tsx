type Info = Array<{
  text: string | number;
  className?: string;
  children?: React.ReactNode;
}>;

const getAge = () => {
  var today = new Date();
  var birthDate = new Date(2005, 9, 10);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const MenuInfo: Info = [
  {
    text: "Info",
    className: "text-xs text-muted-foreground",
  },
  {
    text: "Front-end / Creative",
  },
  {
    text: "Full-time / Freelance",
    children: <span className="lowercase">&nbsp;(available)</span>,
  },
  {
    text: "São Paulo, Brazil",
  },
  {
    text: getAge() + "Y",
  },
];
