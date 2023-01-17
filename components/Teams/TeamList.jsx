import TeamItem from './TeamItem';

export default function TeamList(props) {

    return (
        <ul className='flex flex-wrap justify-center items-center mt-16'>
            {props.teams.map(team => {
                return <TeamItem key={team._id} id={team._id} name={team.name.replace(/-/g, ' ')} />
            })}
        </ul>
    )
}