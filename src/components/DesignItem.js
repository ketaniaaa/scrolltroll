import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogCard.css';

export default class DesignItem extends Component {
  render() {
    return (
      <Link className='h-card blogCard' to ={this.props.route}>
        <section className='p-name blogHeader'>


            <img src={this.props.icon} alt="ScrollTroll icon" className="blogIcon u-photo"  />

            <section className='p-name blogTitleandName'>
            <h2 className='p-name blogCardTitle'>{this.props.name}</h2>
            <h3 className='p-name blogCardAuthor'>{this.props.user}</h3>

            </section>

        </section>

        <p className='e-summary blogSummary'>{this.props.description}</p>
        <img src={this.props.image} alt={this.props.alt} className="blogImage u-photo" />
        

        <section className='dt-dateTime blogDate'>
           <span className='dt-dateTime blogCardDate'> {this.props.date}</span>
           <span className='p-name blogPlatform'>{this.props.platform}</span>

        </section>

        <ul className='u-social blogSocials'>
        <li className='blogSocialType'> <b className='number blogNumber'>4.7k</b> Trolls </li>
        <li className='blogSocialType'> <b className='number blogNumber'>10k</b> Retrolls </li>
        <li className='blogSocialType'> <b className='number blogNumber'>22.1k</b> Trollikes </li>
        </ul>
        </Link>
    )
  }
}