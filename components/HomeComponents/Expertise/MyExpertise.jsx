import ExpertiseCard from "./ExpertiseCard"
import expertise from '../../../pages/api/expertise'
export const runtime = "experimental-edge";
const MyExpertise = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >
                {
                    expertise?.map((data, key) => (<ExpertiseCard key={key} data={data}/>))
                }
            </div>
        </>
    )
}

export default MyExpertise