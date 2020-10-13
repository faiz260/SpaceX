import gql from 'graphql-tag';

export const LaunchList = gql`
    query LaunchInfo{
        launches{
            mission_name
            mission_id
            launch_success
            launch_year
        }
    }
`