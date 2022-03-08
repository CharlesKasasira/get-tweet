function SkillBadge({ skill, skillIcon, color }) {
  return (
    <span
        style={{
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            margin: '0 2px'
        }}
        className='skill'
    >
        <span
            style={{marginRight: '3px', color: color, fontSize: '1rem'}}
        >
            {skillIcon}
        </span>
        <span className='skill-text'>{skill}</span>
    </span>
  )
}

export default SkillBadge