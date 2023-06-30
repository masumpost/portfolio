const Range = ({ skill }) => {
    const { skillName, range } = skill;
    return (
        <div>
            <div className="flex justify-between mr-5 my-2">
                <p>{skillName}</p>
                <p>{range}%</p>
            </div>
            <input type="range" min={0} max="100" value={range} className="range range-xs range-success" />
        </div>
    );
};

export default Range;