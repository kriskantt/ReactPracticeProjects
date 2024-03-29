interface Props {
  title: string;
  description?: string;
}
const Heading = ({ title, description = "" }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {description && <h3>{description}</h3>}
    </div>
  );
};

export default Heading;
