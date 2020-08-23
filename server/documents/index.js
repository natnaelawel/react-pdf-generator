const render = ({
  name,
  email,
  image,
  phone,
  profession,
  profile,
  website,
  experiences,
  skills,
  education,
}) => {
  const date = new Date();
  return `
		 <!DOCTYPE html>
<html>
<head>
<title>Curriculum Vitae</title>

<meta name="viewport" content="width=device-width"/>
<meta name="description" content="The Curriculum Vitae of Joe Bloggs."/>
<meta charset="UTF-8"> 

<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>

<style>

	article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
	display:block;
	}

	html, body {
		background: #181818;
		font-family: 'Lato', helvetica, arial, sans-serif; 
		font-size: 16px;
		padding: 0;
		margin:0;
		color: #222;}

	.clear {clear: both;}

	p {
		font-size: 1em;
		line-height: 1.4em;
		margin-bottom: 20px;
		color: #444;
	}

	#cv {
		width: 100%;
		background: #f3f3f3;
		height: 100%;
	}

	.mainDetails {
		padding: 25px 20px;
		border-bottom: 2px solid #cf8a05;
		background: #ededed;
	}

	#name h2 {
		font-size: 1.5em;
		font-weight: 700;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		margin-bottom: -6px;
	}

	#name h3 {
		font-size: 1.0em;
		margin-left: 2px;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	}

	#mainArea {
		padding: 0 20px;
	}

	#headshot {
		height: 150px;
		width: 150px;
		float: left;
		margin-right: 20px;
	}

	#headshot img {
		width: 100%;
		height: 100%;
		-webkit-border-radius: 50px;
		border-radius: 50%;
	}

	#name {
		float: left;
		max-width: 400px;
	}

	#contactDetails {
		float: right;
	}

	#contactDetails ul {
		list-style-type: none;
		font-size: 0.9em;
		margin-top: 2px;
	}

	#contactDetails ul li {
		margin-bottom: 3px;
		color: #444;
	}

	#contactDetails ul li a, a[href^=tel] {
		color: #444; 
		text-decoration: none;
		-webkit-transition: all .3s ease-in;
		-moz-transition: all .3s ease-in;
		-o-transition: all .3s ease-in;
		-ms-transition: all .3s ease-in;
		transition: all .3s ease-in;
	}
	section {
		border-top: 1px solid #dedede;
		padding: 10px 0 0;
	}

	section:first-child {
		border-top: 0;
	}

	section:last-child {
		padding: 10px 0 10px;
	}

	.sectionTitle {
		float: left;
		width: 25%;
	}

	.sectionContent {
		float: right;
		width: 72.5%;
	}

	.sectionTitle h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-style: italic;
		font-size: 1.5em;
		color: #cf8a05;
	}

	.sectionContent h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.5em;
		margin-bottom: -2px;
	}

	.subDetails {
		font-size: 0.8em;
		font-style: italic;
		margin-bottom: 3px;
	}

	.keySkills {
		list-style-type: none;
		-moz-column-count:3;
		-webkit-column-count:3;
		column-count:3;
		margin-bottom: 10px;
		font-size: 1em;
		color: #444;
	}

	.keySkills ul li {
		margin-bottom: 3px;
	}
	
	</style>

</head>
<body id="top">
<div id="cv" class="instaFade">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
			<img src=\'${image}\' alt=\'${name}\' />
		</div>
		
		<div id="name">
			<h2 class="quickFade delayTwo">Name: ${name}</h2>
			<h3 class="quickFade delayThree">Profession: ${profession}</h3>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
			<ul>
				<li>e: <a href=\'mailto:${email}\' target="_blank">${email}</a></li>
				<li>w: <a href=\'http://${website}'>${website}</a></li>
				<li>m: ${phone}</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h2>Personal Profile</h2>
				</div>
				
				<div class="sectionContent">
					<p>${profile}</div>
			</article>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h2>Work Experience</h2>
			</div>
			
            <div class="sectionContent">
             ${experiences.map((experience) => {
               return `
                    <article>
                        <h2>${experience.job_title}</h2>
                        <h3>${experience.company}</h3>
                        <p class="subDetails">${experience.duration}</p>
                        <p class="subDetails">${experience.detail}</p>
                    </article>`;
             })}
				
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h2>Key Skills</h2>
			</div>
			
			<div class="sectionContent">
				<ul class="keySkills">
                     ${skills.map(skill =>{
						 `<li>${skill.title}</li>`
					 	}
					)}
				</ul>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h2>Education</h2>
			</div>
			
			<div class="sectionContent">
                  ${education.map((edu) => {
                    return `
                    <article>
                        <h2>${edu.institution}</h2>
                        <p class="subDetails">${edu.qualifaction}</p>
                        <p>${edu.detail}</p>
                    </article>`;
                  })}
            </div>
            <h5>Date: ${date}</h5>
			<div class="clear"></div>
		</section>
		
	</div>
</div>
</body>
</html>

  `;
};

module.exports = render;

