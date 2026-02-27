import {useState} from "react"

function Casestudycard({title, challenge, solution, outcome})
{
    const [showMore, setShowMore] =useState(false)

    return(
        <> 
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>

      <h4 className="text-lg font-semibold mt-2">Challenge</h4>
      <p className="text-gray-600">{challenge}</p>

      {showMore && (
        <>
          <h4 className="text-lg font-semibold mt-4">Solution</h4>
          <p className="text-gray-600">{solution}</p>

          <h4 className="text-lg font-semibold mt-4">Outcome</h4>
          <p className="text-gray-600">{outcome}</p>
        </>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-indigo-600 hover:underline"
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
    </>
  );
}

export default Casestudycard;

      
