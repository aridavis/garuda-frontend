
import UserJobCardItem from './UserJobCardItem';

function UserJobCardList(props) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-auto">
      {props.jobs.map((job, index) => (
        <UserJobCardItem job={job} index={index} />
      ))}
    </ul>
  )
}

export default UserJobCardList;