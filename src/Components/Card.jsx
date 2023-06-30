const Card = ({edu}) => {
    const { academicYear, universityName, degreeName, courseDetails } = edu;
    const {jobTime, position, companyName, jobDescription} = edu;
    return (
        <div className="my-4">
            <div className="card w-full  bg-black text-white shadow-xl">
                <div className="card-body">
                    <p className="bg-success p-1 rounded-md w-28">{academicYear? academicYear : jobTime}</p>
                    <h2 className="card-title">{degreeName? degreeName : position}</h2>
                    <h2 className="card-title text-success">{universityName ? universityName : companyName}</h2>
                    <p>{courseDetails ? courseDetails : jobDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;