'use client';
import {useState,useEffect} from'react';
import Link from 'next/link';
import {ImMusic} from "react-icons/im"
import {PostMainCompTypes} from "../types";
import {AiFillHeart} from "react-icons/ai";
import PostMainLikes from './PostMainLikes'
import Upload from '../upload/Pages';

export default function PostMain({post}:PostMainCompTypes)
{
    useEffect(()=>{
        const video=document.getElementById(`video-${post?.id}`) as
        HTMLVideoElement
        const PostMainElement=document.getElementById(`PostMain-${post.id}`);
        if(PostMainElement)
        {
            let observer=new IntersectionObserver((entries)=>{
                entries[0].isIntersecting? video.play() :video.pause()
            },{threshold:[0.6]})
            observer.observe(PostMainElement);
        }
    },[])

    // return (
    //     <Upload/>
    //     // <Upload/>
    // )
    return (
        <>
        <div id={`PostMain-${post.id}`} className="flex border-b py-6">
            <div className='cursor-pointer'>
                <img className="rounded-full max-h-[60px]" width="60" src={post?.profile?.image}/>
            </div>

            <div className='pl-3 w-full px-4'>
                <div className='flex items-center justify-between pb-0.5'>
                    <Link href={`/profile/${post.profile.user_id}`}>
                        {post.profile.name}
                    </Link>
                    <button
                    className='border text-[15px] px-[21px] py-0.5 border-[#F02c56] hover:bg-[#ffeef2] 
                    font-semibold rounded-md'>
                            follow
                    </button>
                </div>
                <p className='text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]'>
                    {post.text}
                </p>
                <p className='text-[14px] text-gray-500 pb-0.5'>#fun #cool #superAwesome</p>
                <p className='text-[14px] pb-0.5 flex'>
                    <ImMusic size="17"/>
                    <span className='px-1'>orginal sound-Awesome</span>
                    <AiFillHeart size="20"/>
                </p>
                <div className='mt-2.5 flex'>
                    <div className='relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center
                     bg-black rounded-xl cursor-pointer'>
                        <video
                        id={`video-${post.id}`}
                        loop
                        controls
                        muted
                        className='rounded-xl object-cover mx-auto h-full'
                        src={post?.video_url}
                        />
                        <img
                        className="absolute right-2 bottom-10"
                        width="90"
                        src="/images/tiktok-logo-white.png"
                        />
                    </div>

                    
                    <PostMainLikes post={post}/>
                    {/* <Upload></Upload> */}

                </div>
            </div>
        </div>
        </>

    )
    // return(
    //     <Upload></Upload>
    // )
}


