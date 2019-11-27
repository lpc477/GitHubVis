import React from 'react';
import Moment from 'react-moment';
const imgStye = {             //image css
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = (props) => {
    return (
      <div class="container-fluid">
        <div class="row-fluid">
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/> : null }
        </div>

        <div>
          {props.infoclean.name ? <div><p>Name:</p><p>{props.infoclean.name}</p></div> : null }
        </div>

        <div>
          {props.infoclean.bio ? <div><p>Bio:</p><p>{props.infoclean.bio}</p></div> : null }
        </div>

        <div>
          {props.infoclean.created_at ? <div><p1>Joined:</p1><p1>{
          <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p1></div> : null }
        </div>

        <div>
          {props.infoclean.blog ? <div><p>Blog:</p><p><a rel="noopener noreferrer" href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
        </div>
        <div>
          {props.infoclean.location ?
            <div><p1>Location:</p1><p1>{props.infoclean.location}</p1></div> : null }
        </div>

        <div>
          {props.infoclean.company ?
            <div>
              <p1>Company:</p1><p1>{props.infoclean.company}</p1>
            </div> : null }
        </div>

        <div>
          {props.infoclean.public_repos ?
            <div>
              <p1>Public Repos:</p1><p1>{props.infoclean.public_repos}</p1>
            </div> : null }
        </div>

        <div>
          {props.infoclean.followers ?
            <div>
              <p1>Followers:</p1><p1>{props.infoclean.followers}</p1>
            </div> : null }
        </div>

        <div>
          {props.infoclean.following ?
            <div>
              <p1>Following:</p1><p1>{props.infoclean.following}</p1>
            </div> : null }
        </div>

        <div>
          {props.infoclean.html_url ?
            <div><p1><a rel="noopener noreferrer"
          href={props.infoclean.html_url} target="_blank">View on GitHub</a></p1></div> : null }
        </div>

        <div>
          {props.infoclean.login ?
            <div>
            { <img src={"http://ghchart.rshah.org/"+props.infoclean.login}
             alt="Github chart" />}<br/>
          </div> : null }
        </div>
      </div>
    )
  };export default ProfileDetails;
