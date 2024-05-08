import React from 'react'
import './team.css';
import { LuMail } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoGlobeSharp } from "react-icons/io5";
import { getAllTeam } from '@/app/lib/graphQlqueries/teamQueries/getAllTeam';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import DomPurify from '../domPurify';
import { getTeamPageContent } from '@/app/lib/graphQlqueries/teamQueries/getTeamPageContent';

import Image from 'next/image'



async function getTeamFunc() {
  const AllTeam = await getAllTeam();
  return AllTeam;
}






const Team = async () => {

  const AllTeamRes = await getTeamFunc();
  const finalTeamArr = AllTeamRes.teams.nodes;

  
  return (
    <div className='container' >
      <div className="row team-layout-one ">
     
        {
          finalTeamArr.map((team, index) => {
            const image = team.teamImages.teamNewImage
            const finalTeamImg = image !== null ? image.node.mediaItemUrl : ""
            console.log(finalTeamImg)
            return (
              <div id={`teamid-${team.teamId}`} key={team.teamId} className="col-md-6 col-lg-3 mb-5">
                <div className="card">
                  <div className="team-image">
                    <Image width={400} height={400} src={finalTeamImg} className="card-img-top" alt="Charles John" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{team.title}</h3>
                    <h5>{team.teamDesignation}</h5>
                  </div>
                  <p className="card-text">{team.teamShortDescription}</p>
                  <div className="contact-information">
                    <ul>
                      <li><a href={`mailto:${team.teamEmail}`}><LuMail className='me-2' color='#143ee5' /> {team.teamEmail}</a></li>
                      <li className="team-number"><a href={`tel:${team.teamPhone}`}><IoPhonePortraitOutline className='me-2' color='#143ee5' /> {team.teamPhone}</a></li>
                      <li><a href={team.teamWebsiteLink} target="_blank"><IoGlobeSharp className='me-2' color='#143ee5' /> {team.teamWebsiteLink}</a></li>
                    </ul>
                  </div>

                  <div className="social-media-icons">
                    <a href={team.teamFbLink} target="_blank" className="facebook-icon me-2"><FaFacebookF color='#fff'/></a>
                    <a href={team.teamTwitterLink} target="_blank" className="twitter-icon me-2"><FaTwitter color='#fff'/></a>
                    <a href={team.teamLinkedinLink} target="_blank" className="linkedin-icon me-2" ><FaLinkedinIn color='#fff'/></a>
                 
                    <a href={`mailto:${team.teamEmail}`} target="_blank" className="envelope-icon "><LuMail color='#fff'/></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <DomPurify domClass="" domData={pageContentRes.content.rendered} /> */}

    </div>
  )
}

export default Team
