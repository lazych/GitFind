import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"

export default function Commits({ username, reponame }) {
  const commitsQuery = useDetails(username, reponame, "commits")

  return (
    <Container>
      {commitsQuery.isLoading ? (
        "loading..."
      ) : (
        <ul className="flex flex-col gap-8">
          {commitsQuery.data?.map((commit) => (
            <li key={commit.sha}>
              <DetailsCard author={commit.author?.login} avatar={commit.author?.avatar_url} body={commit.commit?.message} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
