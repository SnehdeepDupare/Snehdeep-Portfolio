type Props = {};

function SkillComponent({}: Props) {
  return (
    <div>
      <img
        src="/react.png"
        alt="skill-img"
        className="h-16 w-16 border rounded-full object-cover mb-2"
      />
      <p>React</p>
    </div>
  );
}

export default SkillComponent;
