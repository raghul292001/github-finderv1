import React, { useContext, useEffect } from 'react'
import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'

import GithubContext from '../context/github/GithubContext'
import Spinner from '../components/layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import RepoList from '../components/repos/RepoList';

function User() {
    const {getUser,user,loading,getUserRepos,repos} = useContext(GithubContext);

    const params = useParams();

    useEffect(()=>{
        getUser(params.login)
        getUserRepos(params.login)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //destructing from the user object

    const {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user

    if(loading) {
        return  <Spinner/>
    }
  return (
    <>
 <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 '>
          <div className='custom-card-image pl-3 mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='pt-3 '>
                <h2 className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{name}</h2>
                <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2 space-y-8 rounded-lg shadow-md pl-4'>
            <div className='t-6'>
              <div className='flex flex-col-3 space-x-5 justify-center pb-4 '>
              <h1 className='text-3xl'>{name}</h1>
                <div className='bg-blue-500 rounded-full text-white px-3 py-2 text-xs uppercase font-medium '>{type}</div>
                {hireable && (
                  <div className='bg-green-500 rounded-full text-white px-3 py-2 text-xs uppercase font-medium '>Hireable</div>
                )}
              </div>

              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='flex flex-col '>
              {location && (
                <div className=''>
                  <div className='text-md font-bold'>Location:</div>
                  <div className='text-lg'>{location}</div>
                </div>
              )}
              {blog && (
                <div className=''>
                  <div className='text-md font-bold'>Website:</div>
                  <div className='text-lg'>
                    <a href={`https://${blog}`} target='_blank' rel='noreferrer'>{blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className=''>
                  <div className='text-md font-bold'>Twitter:</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full py-5 px-5 mb-6 rounded-lg shadow-md bg-base-100 stats pl-4'>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='flex items-center'>
              <div className=' text-secondary'>
                <FaUsers className='text-3xl md:text-5xl text-blue-700' />
              </div>
              <div className='pr-5 pl-3'>Followers</div>
              <div className='pr-5 text-3xl md:text-4xl  text-blue-700'>
                {followers}
              </div>
            </div>

            <div className='flex items-center'>
              <div className=' text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl  text-blue-700' />
              </div>
              <div className=' pr-5 pl-3 '>Following</div>
              <div className=' pr-5 text-3xl md:text-4xl  text-blue-700'>
                {following}
              </div>
            </div>

            <div className='flex items-center'>
              <div className=' text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl  text-blue-700' />
              </div>
              <div className=' pr-5 pl-3'>Public Repos</div>
              <div className=' pr-5 text-3xl md:text-4xl'>
                {public_repos}
              </div>
            </div>

            <div className=' flex items-center'>
              <div className='text-secondary'>
                <FaStore className='text-3xl md:text-5xl  text-blue-700 ' />
              </div>
              <div className=' pr-5 pl-3'>Public Gists</div>
              <div className=' pr-5 text-3xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos}/>
      </div>
    </>    
  )
}

export default User
