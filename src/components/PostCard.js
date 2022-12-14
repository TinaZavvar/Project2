import React, { useContext } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';


function PostCard({
  post: { body, createdAt, id, username, likeCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="tiny"
          src="/Twitina.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
          </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
