var horoscopesArray = [
	{
		sign: "capricorn",
		description: "You're best attributes are: Determination, Dominance, Perservering, Practical, Willful",
		image: "img/Capricorn.png"
	},
	{
		sign: "aquarius",
		description: "You're best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image:"img/Aquarius.png"
	},
	{
		sign: "pisces",
		description: "You're best attributes are: Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image:"img/Pisces.png"
	},
	{
		sign: "aries",
		description: "You're best attributes are: Active, Demanding, Determined, Effective, Ambitious",
		image:"img/Aries.png"
	},
	{
		sign: "taurus",
		description: "You're best attributes are: Security, Subtle strength, Appreciation, Instruction, Patience",
		image:"img/taurus.png"
	},
	{
		sign: "gemini",
		description: "You're best attributes are: Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image:"img/gemini.png"
	},
	{
		sign: "cancer",
		description: "You're best attributes are: Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image:"img/Cancer.png"
	},
	{
		sign: "leo",
		description: "You're best attributes are: Ruling, Warmth, Generosity, Faithful, Initiative",
		image:"img/leo.png"
	},
	{
		sign: "virgo",
		description: "You're best attributes are: Analyzing, Practical, Reflective, Observation, Thoughtful",
		image:"img/virgo.png"
	},
	{
		sign: "libra",
		description: "You're best attributes are: Balance, Justice, Truth, Beauty, Perfection",
		image:"img/libra.png"
	},
	{
		sign: "scorpio",
		description: "You're best attributes are: Transient, Self-Willed, Purposeful, Unyielding",
		image:"img/Scorpio.png"
	},
	{
		sign: "sagittarius",
		description: "You're best attributes are: Philosophical, Motion, Experimentation, Optimism",
		image:"img/sagittarius.png"
	},


]
function getInfo() {
	var user = document.getElementById("info").value

	for(i = 0; i < horoscopesArray.length; i ++ ){
		if(user == horoscopesArray[i].sign){
			document.getElementById("Zodiac").innerHTML = horoscopesArray[i].sign
			document.getElementById("Img").src = horoscopesArray[i].image
			document.getElementById("Horoscope").innerHTML = horoscopesArray[i].description
			return
		}else {
			document.getElementById("Zodiac").innerHTML = "Enter your zodiac sign"
		}
	}
}
	
