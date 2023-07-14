import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDirector = (email) => {
    return axios.get(`http://localhost:4000/directors/${email}`);
};
const fetchWorks = ({ queryKey }) => {
    // console.log({ queryKey });
    return axios.get(`http://localhost:4000/works/${queryKey[1]}`);
};

const DependentQueriesPage = ({ email }) => {
    const { data: director } = useQuery(["director", email], () =>
        fetchDirector(email)
    );
    const worksId = director?.data.worksId;

    const { data: works } = useQuery({
        queryKey: ["works", worksId],
        queryFn: fetchWorks,
        enabled: !!worksId,
    });

    // console.log({works});`

    return (
        <>
            <div> DependentQueriesPage</div>
            {works?.data.best}
        </>
    );
};

export default DependentQueriesPage;
