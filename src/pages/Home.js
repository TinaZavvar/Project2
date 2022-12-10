import React from 'react';
import { useContext } from 'react';

import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';



function Home() {
  const { user } = useContext(AuthContext);
  const {loading, data } = useQuery(FETCH_POSTS_QUERY);
  console.log({loading, data});


  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Twitina</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <div>
          <h1>Loading posts...</h1><i class="spinner loading icon"></i>
          </div>
        ) : (
            <Transition.Group>
            {data.getPosts &&
              data.getPosts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row> 
    </Grid>
  ); 
}

export default Home;
