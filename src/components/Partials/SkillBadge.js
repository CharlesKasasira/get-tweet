function SkillBadge({ skill, skillIcon, color }) {
  return (
    <div
        style={{
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            margin: '2px 2px',
            display: 'inline-block'
        }}
        className='skill'
    >
        <span
            style={{marginRight: '3px', color: color, fontSize: '1rem'}}
        >
            {skillIcon}
        </span>
        <span className='skill-text'>{skill}</span>
    </div>
  )
}

export default SkillBadge