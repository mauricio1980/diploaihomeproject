
// @scripts
import AnswerSearch from "../../../containers/AnswerSearch";
import { NextPage } from 'next';
import { absoluteUrl } from "../../../utils/Utils";
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type DataJsonProps = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

type DataArray = DataJsonProps[];

export const  getServerSideProps: GetServerSideProps<{
  data: DataArray
}> = async (context) => {
  const id = parseInt(context.params?.id as string);
  const { origin } = absoluteUrl(context.req);
  const response = await fetch(`${origin}/api/getJsonPlaceHolder?id=${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json"}
  });
  const data:  DataArray = await response.json();
  return {
    props: {
      data
    }
  };
}

export default function Search({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <AnswerSearch data={data} />;
}

/*const Search: NextPage  = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>){
  return <AnswerSearch data={data} />;
};*/

/*export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count
}*/

//export default Search;