import { Edge, Node } from "reactflow";
import { createEdges } from "../utils/nodesAndEdges";
import { Condition } from "../types/data";

export const initialNodes: Node[] = [
	{
		id: "input",
		type: "initSymptomNode",
		data: {},
		position: { x: 0, y: 0 },
		draggable: false,
	},
];

export const initialEdges: Edge[] = createEdges(initialNodes);

export const sampleConditions: Condition[] = [
	{
		name: "Common Cold",
		symptoms: [
			"COUGH",
			"SORE THROAT",
			"RUNNY NOSE",
			"SNEEZING",
			"HEADACHE",
			"FATIGUE",
		],
		description:
			"A viral infection of the upper respiratory tract causing symptoms like cough, sore throat, runny nose, sneezing, headache, and fatigue.",
		flag: true,
	},
	{
		name: "Influenza",
		symptoms: [
			"FEVER",
			"CHILLS",
			"COUGH",
			"SORE THROAT",
			"RUNNY NOSE",
			"MUSCLE ACHES",
			"FATIGUE",
		],
		description:
			"A contagious respiratory illness caused by influenza viruses, leading to symptoms like fever, chills, cough, sore throat, runny nose, muscle aches, and fatigue.",
		flag: true,
	},
	{
		name: "Allergic Rhinitis",
		symptoms: [
			"RUNNY NOSE",
			"SNEEZING",
			"ITCHY EYES",
			"NASAL CONGESTION",
			"COUGH",
		],
		description:
			"An allergic reaction causing nasal inflammation, resulting in symptoms like runny nose, sneezing, itchy eyes, nasal congestion, and cough.",
		flag: true,
	},
	{
		name: "Sinusitis",
		symptoms: [
			"FACIAL PAIN",
			"NASAL CONGESTION",
			"HEADACHE",
			"RUNNY NOSE",
			"COUGH",
		],
		description:
			"Inflammation of the sinuses often due to infection, causing symptoms such as facial pain, nasal congestion, headache, runny nose, and cough.",
		flag: true,
	},
	{
		name: "Bronchitis",
		symptoms: [
			"COUGH",
			"MUCUS PRODUCTION",
			"FATIGUE",
			"SHORTNESS OF BREATH",
			"CHEST DISCOMFORT",
		],
		description:
			"Inflammation of the bronchial tubes, typically causing a persistent cough, mucus production, fatigue, shortness of breath, and chest discomfort.",
		flag: true,
	},
	{
		name: "Pneumonia",
		symptoms: [
			"COUGH",
			"FEVER",
			"CHILLS",
			"SHORTNESS OF BREATH",
			"CHEST PAIN",
			"FATIGUE",
		],
		description:
			"An infection that inflames the air sacs in one or both lungs, presenting with symptoms such as cough, fever, chills, shortness of breath, chest pain, and fatigue.",
		flag: true,
	},
	{
		name: "Asthma",
		symptoms: ["WHEEZING", "COUGH", "SHORTNESS OF BREATH", "CHEST TIGHTNESS"],
		description:
			"A chronic condition that affects the airways, leading to wheezing, coughing, shortness of breath, and chest tightness due to inflammation and narrowing of the airways.",
		flag: true,
	},
	{
		name: "COVID-19",
		symptoms: [
			"FEVER",
			"COUGH",
			"SHORTNESS OF BREATH",
			"FATIGUE",
			"LOSS OF TASTE",
			"LOSS OF SMELL",
		],
		description:
			"A highly contagious viral infection caused by the SARS-CoV-2 virus, resulting in symptoms such as fever, cough, shortness of breath, fatigue, and loss of taste or smell.",
		flag: true,
	},
	{
		name: "Strep Throat",
		symptoms: [
			"SORE THROAT",
			"FEVER",
			"PAINFUL SWALLOWING",
			"RED AND SWOLLEN TONSILS",
		],
		description:
			"A bacterial infection causing inflammation and pain in the throat, often accompanied by fever, painful swallowing, and red and swollen tonsils.",
		flag: true,
	},
	{
		name: "Tuberculosis",
		symptoms: [
			"COUGH",
			"FEVER",
			"NIGHT SWEATS",
			"WEIGHT LOSS",
			"FATIGUE",
			"CHEST PAIN",
		],
		description:
			"A potentially serious infectious disease that mainly affects the lungs, causing symptoms like a persistent cough, fever, night sweats, weight loss, fatigue, and chest pain.",
		flag: true,
	},
	{
		name: "Migraine",
		symptoms: [
			"HEADACHE",
			"NAUSEA",
			"SENSITIVITY TO LIGHT",
			"SENSITIVITY TO SOUND",
			"VISUAL AURA",
		],
		description:
			"A neurological condition characterized by intense, debilitating headaches often accompanied by nausea, sensitivity to light and sound, and visual disturbances called auras.",
		flag: true,
	},
	{
		name: "Anxiety Disorder",
		symptoms: [
			"EXCESSIVE WORRY",
			"IRRITABILITY",
			"RESTLESSNESS",
			"FATIGUE",
			"MUSCLE TENSION",
			"SLEEP DISTURBANCES",
		],
		description:
			"A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities, often accompanied by physical symptoms like muscle tension and sleep disturbances.",
		flag: true,
	},
	{
		name: "Depression",
		symptoms: [
			"PERSISTENT SADNESS",
			"LOSS OF INTEREST",
			"FATIGUE",
			"CHANGES IN APPETITE",
			"SLEEP DISTURBANCES",
			"DIFFICULTY CONCENTRATING",
		],
		description:
			"A mood disorder causing a persistent feeling of sadness and loss of interest, affecting how one feels, thinks, and handles daily activities, often accompanied by fatigue and changes in appetite and sleep.",
		flag: true,
	},
	{
		name: "Diabetes Mellitus",
		symptoms: [
			"FREQUENT URINATION",
			"INCREASED THIRST",
			"UNEXPLAINED WEIGHT LOSS",
			"FATIGUE",
			"BLURRED VISION",
		],
		description:
			"A group of diseases that result in too much sugar in the blood (high blood glucose), causing symptoms such as frequent urination, increased thirst, unexplained weight loss, fatigue, and blurred vision.",
		flag: true,
	},
	{
		name: "Hypertension",
		symptoms: [
			"HEADACHE",
			"DIZZINESS",
			"BLURRED VISION",
			"SHORTNESS OF BREATH",
			"CHEST PAIN",
		],
		description:
			"A condition in which the force of the blood against the artery walls is too high, often with no symptoms but sometimes causing headaches, dizziness, blurred vision, shortness of breath, and chest pain.",
		flag: true,
	},
	{
		name: "Hyperthyroidism",
		symptoms: [
			"WEIGHT LOSS",
			"RAPID HEARTBEAT",
			"SWEATING",
			"NERVOUSNESS",
			"IRRITABILITY",
			"FATIGUE",
		],
		description:
			"A condition in which the thyroid gland produces too much thyroid hormone, leading to symptoms like weight loss, rapid heartbeat, sweating, nervousness, irritability, and fatigue.",
		flag: true,
	},
	{
		name: "Hypothyroidism",
		symptoms: [
			"WEIGHT GAIN",
			"FATIGUE",
			"COLD INTOLERANCE",
			"DRY SKIN",
			"HAIR LOSS",
			"DEPRESSED MOOD",
		],
		description:
			"A condition in which the thyroid gland doesn't produce enough thyroid hormone, causing symptoms like weight gain, fatigue, cold intolerance, dry skin, hair loss, and depressed mood.",
		flag: true,
	},
	{
		name: "Gastroesophageal Reflux Disease (GERD)",
		symptoms: [
			"HEARTBURN",
			"REGURGITATION",
			"CHEST PAIN",
			"DIFFICULTY SWALLOWING",
			"CHRONIC COUGH",
		],
		description:
			"A digestive disorder where stomach acid or bile irritates the food pipe lining, leading to symptoms such as heartburn, regurgitation, chest pain, difficulty swallowing, and chronic cough.",
		flag: true,
	},
	{
		name: "Irritable Bowel Syndrome (IBS)",
		symptoms: ["ABDOMINAL PAIN", "BLOATING", "GAS", "DIARRHEA", "CONSTIPATION"],
		description:
			"A gastrointestinal disorder causing symptoms like abdominal pain, bloating, gas, diarrhea, and constipation, without any underlying damage to the digestive system.",
		flag: true,
	},
	{
		name: "Chronic Obstructive Pulmonary Disease (COPD)",
		symptoms: [
			"SHORTNESS OF BREATH",
			"WHEEZING",
			"CHEST TIGHTNESS",
			"CHRONIC COUGH",
			"FREQUENT RESPIRATORY INFECTIONS",
		],
		description:
			"A group of lung diseases that block airflow and make it difficult to breathe, characterized by symptoms such as shortness of breath, wheezing, chest tightness, chronic cough, and frequent respiratory infections.",
		flag: true,
	},
	{
		name: "Rheumatoid Arthritis",
		symptoms: [
			"JOINT PAIN",
			"JOINT SWELLING",
			"STIFFNESS",
			"FATIGUE",
			"WEIGHT LOSS",
			"FEVER",
		],
		description:
			"An autoimmune disorder that primarily affects joints, leading to symptoms like joint pain, swelling, stiffness, fatigue, weight loss, and fever.",
		flag: true,
	},
	{
		name: "Osteoarthritis",
		symptoms: [
			"JOINT PAIN",
			"JOINT STIFFNESS",
			"LOSS OF FLEXIBILITY",
			"SWELLING",
			"BONE SPURS",
		],
		description:
			"A degenerative joint disease causing the breakdown of cartilage, resulting in symptoms such as joint pain, stiffness, loss of flexibility, swelling, and bone spurs.",
		flag: true,
	},
	{
		name: "Gout",
		symptoms: [
			"SEVERE JOINT PAIN",
			"SWELLING",
			"REDNESS",
			"WARMTH",
			"STIFFNESS",
		],
		description:
			"A form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and warmth in the joints, often affecting the big toe.",
		flag: true,
	},
	{
		name: "Lupus",
		symptoms: [
			"FATIGUE",
			"JOINT PAIN",
			"SKIN RASHES",
			"FEVER",
			"MOUTH SORES",
			"HAIR LOSS",
		],
		description:
			"An autoimmune disease where the body's immune system attacks its own tissues, causing symptoms like fatigue, joint pain, skin rashes, fever, mouth sores, and hair loss.",
		flag: true,
	},
	{
		name: "Multiple Sclerosis",
		symptoms: [
			"NUMBNESS",
			"WEAKNESS",
			"LOSS OF COORDINATION",
			"VISION PROBLEMS",
			"FATIGUE",
		],
		description:
			"A disease in which the immune system eats away at the protective covering of nerves, resulting in symptoms like numbness, weakness, loss of coordination, vision problems, and fatigue.",
		flag: true,
	},
	{
		name: "Parkinson's Disease",
		symptoms: [
			"TREMORS",
			"SLOWED MOVEMENT",
			"RIGID MUSCLES",
			"BALANCE PROBLEMS",
			"SPEECH CHANGES",
		],
		description:
			"A progressive nervous system disorder that affects movement, causing symptoms such as tremors, slowed movement, rigid muscles, balance problems, and speech changes.",
		flag: true,
	},
	{
		name: "Alzheimer's Disease",
		symptoms: [
			"MEMORY LOSS",
			"CONFUSION",
			"DIFFICULTY COMMUNICATING",
			"DISORIENTATION",
			"MOOD CHANGES",
		],
		description:
			"A progressive disease that destroys memory and other important mental functions, characterized by symptoms such as memory loss, confusion, difficulty communicating, disorientation, and mood changes.",
		flag: true,
	},
	{
		name: "Epilepsy",
		symptoms: [
			"SEIZURES",
			"CONFUSION",
			"STARING SPELLS",
			"LOSS OF CONSCIOUSNESS",
			"UNCONTROLLABLE JERKING MOVEMENTS",
		],
		description:
			"A neurological disorder marked by sudden recurrent episodes of sensory disturbance, loss of consciousness, or convulsions, associated with abnormal electrical activity in the brain.",
		flag: true,
	},
	{
		name: "Anemia",
		symptoms: [
			"FATIGUE",
			"WEAKNESS",
			"PALE SKIN",
			"SHORTNESS OF BREATH",
			"DIZZINESS",
			"COLD HANDS AND FEET",
		],
		description:
			"A condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues, causing symptoms like fatigue, weakness, pale skin, shortness of breath, dizziness, and cold hands and feet.",
		flag: true,
	},
	{
		name: "Leukemia",
		symptoms: [
			"FEVER",
			"FATIGUE",
			"FREQUENT INFECTIONS",
			"WEIGHT LOSS",
			"SWOLLEN LYMPH NODES",
			"EASY BRUISING",
		],
		description:
			"A type of cancer of the blood and bone marrow characterized by an abnormal increase in white blood cells, leading to symptoms such as fever, fatigue, frequent infections, weight loss, swollen lymph nodes, and easy bruising.",
		flag: true,
	},
	{
		name: "Lymphoma",
		symptoms: [
			"SWOLLEN LYMPH NODES",
			"FEVER",
			"NIGHT SWEATS",
			"WEIGHT LOSS",
			"FATIGUE",
		],
		description:
			"A group of blood cancers that develop in the lymphatic system, presenting with symptoms like swollen lymph nodes, fever, night sweats, weight loss, and fatigue.",
		flag: true,
	},
	{
		name: "Celiac Disease",
		symptoms: [
			"DIARRHEA",
			"BLOATING",
			"FATIGUE",
			"WEIGHT LOSS",
			"ANEMIA",
			"JOINT PAIN",
		],
		description:
			"An immune reaction to eating gluten, a protein found in wheat, barley, and rye, causing symptoms like diarrhea, bloating, fatigue, weight loss, anemia, and joint pain.",
		flag: true,
	},
	{
		name: "Crohn's Disease",
		symptoms: [
			"ABDOMINAL PAIN",
			"DIARRHEA",
			"FATIGUE",
			"WEIGHT LOSS",
			"MALNUTRITION",
		],
		description:
			"A type of inflammatory bowel disease (IBD) causing inflammation of the digestive tract, leading to symptoms like abdominal pain, diarrhea, fatigue, weight loss, and malnutrition.",
		flag: true,
	},
	{
		name: "Ulcerative Colitis",
		symptoms: [
			"ABDOMINAL PAIN",
			"DIARRHEA",
			"BLOODY STOOLS",
			"WEIGHT LOSS",
			"FATIGUE",
		],
		description:
			"A chronic inflammatory bowel disease causing inflammation and ulcers in the digestive tract, characterized by symptoms such as abdominal pain, diarrhea, bloody stools, weight loss, and fatigue.",
		flag: true,
	},
	{
		name: "Hepatitis B",
		symptoms: [
			"FEVER",
			"FATIGUE",
			"LOSS OF APPETITE",
			"NAUSEA",
			"JAUNDICE",
			"ABDOMINAL PAIN",
		],
		description:
			"A serious liver infection caused by the hepatitis B virus, resulting in symptoms like fever, fatigue, loss of appetite, nausea, jaundice, and abdominal pain.",
		flag: true,
	},
	{
		name: "Hepatitis C",
		symptoms: [
			"FEVER",
			"FATIGUE",
			"NAUSEA",
			"LOSS OF APPETITE",
			"JAUNDICE",
			"DARK URINE",
		],
		description:
			"A viral infection causing liver inflammation, sometimes leading to serious liver damage, with symptoms such as fever, fatigue, nausea, loss of appetite, jaundice, and dark urine.",
		flag: true,
	},
	{
		name: "Pancreatitis",
		symptoms: [
			"UPPER ABDOMINAL PAIN",
			"NAUSEA",
			"VOMITING",
			"FEVER",
			"RAPID PULSE",
		],
		description:
			"Inflammation of the pancreas causing upper abdominal pain, nausea, vomiting, fever, and a rapid pulse, often linked to gallstones or chronic and excessive alcohol use.",
		flag: true,
	},
	{
		name: "Kidney Stones",
		symptoms: [
			"SEVERE PAIN",
			"NAUSEA",
			"VOMITING",
			"BLOOD IN URINE",
			"FREQUENT URINATION",
		],
		description:
			"Hard deposits made of minerals and salts that form inside the kidneys, leading to symptoms like severe pain, nausea, vomiting, blood in urine, and frequent urination.",
		flag: true,
	},
	{
		name: "Urinary Tract Infection (UTI)",
		symptoms: [
			"BURNING URINATION",
			"FREQUENT URINATION",
			"CLOUDY URINE",
			"PELVIC PAIN",
			"FEVER",
		],
		description:
			"An infection in any part of the urinary system, causing symptoms such as burning during urination, frequent urination, cloudy urine, pelvic pain, and fever.",
		flag: true,
	},
	{
		name: "Chronic Kidney Disease",
		symptoms: [
			"FATIGUE",
			"SWELLING",
			"FREQUENT URINATION",
			"SHORTNESS OF BREATH",
			"HIGH BLOOD PRESSURE",
		],
		description:
			"A condition characterized by a gradual loss of kidney function over time, with symptoms like fatigue, swelling, frequent urination, shortness of breath, and high blood pressure.",
		flag: true,
	},
	{
		name: "Appendicitis",
		symptoms: [
			"ABDOMINAL PAIN",
			"LOSS OF APPETITE",
			"NAUSEA",
			"VOMITING",
			"FEVER",
		],
		description:
			"Inflammation of the appendix causing symptoms like abdominal pain, loss of appetite, nausea, vomiting, and fever, typically requiring surgical removal.",
		flag: true,
	},
	{
		name: "Gallstones",
		symptoms: [
			"ABDOMINAL PAIN",
			"NAUSEA",
			"VOMITING",
			"INDIGESTION",
			"JAUNDICE",
		],
		description:
			"Solid particles that form from bile cholesterol and bilirubin in the gallbladder, causing symptoms like abdominal pain, nausea, vomiting, indigestion, and jaundice.",
		flag: true,
	},
	{
		name: "Peptic Ulcer Disease",
		symptoms: ["ABDOMINAL PAIN", "BLOATING", "HEARTBURN", "NAUSEA", "VOMITING"],
		description:
			"Sores that develop on the lining of the stomach, small intestine, or esophagus, leading to symptoms such as abdominal pain, bloating, heartburn, nausea, and vomiting.",
		flag: true,
	},
	{
		name: "Cystic Fibrosis",
		symptoms: [
			"PERSISTENT COUGH",
			"FREQUENT LUNG INFECTIONS",
			"WHEEZING",
			"SHORTNESS OF BREATH",
			"POOR GROWTH",
		],
		description:
			"A hereditary disorder affecting the exocrine glands, causing the production of abnormally thick mucus, leading to persistent cough, frequent lung infections, wheezing, shortness of breath, and poor growth.",
		flag: true,
	},
	{
		name: "Eczema",
		symptoms: ["ITCHING", "REDNESS", "DRY SKIN", "SWELLING", "CRACKING"],
		description:
			"A condition that makes the skin red, inflamed, and itchy, causing symptoms like itching, redness, dry skin, swelling, and cracking.",
		flag: true,
	},
	{
		name: "Psoriasis",
		symptoms: [
			"RED PATCHES",
			"SILVERY SCALES",
			"DRY SKIN",
			"ITCHING",
			"BURNING",
		],
		description:
			"An autoimmune skin condition that speeds up the life cycle of skin cells, leading to red patches of skin covered with thick, silvery scales, dry skin, itching, and burning.",
		flag: true,
	},
	{
		name: "Rosacea",
		symptoms: [
			"FACIAL REDNESS",
			"VISIBLE BLOOD VESSELS",
			"SWOLLEN RED BUMPS",
			"EYE IRRITATION",
		],
		description:
			"A chronic skin condition causing facial redness, visible blood vessels, swollen red bumps, and eye irritation.",
		flag: true,
	},
	{
		name: "Acne",
		symptoms: ["PIMPLES", "BLACKHEADS", "WHITEHEADS", "CYSTS", "OILY SKIN"],
		description:
			"A skin condition that occurs when hair follicles become clogged with oil and dead skin cells, resulting in pimples, blackheads, whiteheads, cysts, and oily skin.",
		flag: true,
	},
	{
		name: "Melanoma",
		symptoms: [
			"NEW MOLES",
			"CHANGES IN EXISTING MOLES",
			"ASYMMETRY",
			"IRREGULAR BORDERS",
			"VARIATION IN COLOR",
		],
		description:
			"A type of skin cancer that develops from the pigment-producing cells known as melanocytes, characterized by new moles or changes in existing moles, asymmetry, irregular borders, and variation in color.",
		flag: true,
	},
	{
		name: "Vitiligo",
		symptoms: [
			"PATCHY LOSS OF SKIN COLOR",
			"PREMATURE WHITENING OF HAIR",
			"LOSS OF COLOR IN MOUTH AND NOSE",
		],
		description:
			"A condition in which the skin loses its pigment cells (melanocytes), resulting in discolored patches in different areas of the body, premature whitening of hair, and loss of color in the mouth and nose.",
		flag: true,
	},
	{
		name: "Dandruff",
		symptoms: ["ITCHY SCALP", "FLAKY SKIN", "DRY SCALP", "RED AND OILY SKIN"],
		description:
			"A common scalp condition causing the skin to flake, leading to an itchy scalp, flaky skin, dry scalp, and red and oily skin.",
		flag: true,
	},
	{
		name: "HIV/AIDS",
		symptoms: [
			"FEVER",
			"CHILLS",
			"RASH",
			"NIGHT SWEATS",
			"MUSCLE ACHES",
			"SORE THROAT",
			"FATIGUE",
		],
		description:
			"A virus that attacks the body's immune system, if not treated, it can lead to AIDS (acquired immunodeficiency syndrome). Symptoms include fever, chills, rash, night sweats, muscle aches, sore throat, and fatigue.",
		flag: true,
	},
	{
		name: "Syphilis",
		symptoms: [
			"PAINLESS SORES",
			"RASH",
			"FEVER",
			"SWOLLEN LYMPH NODES",
			"MUSCLE ACHES",
		],
		description:
			"A sexually transmitted infection caused by the bacterium Treponema pallidum, presenting with symptoms like painless sores, rash, fever, swollen lymph nodes, and muscle aches.",
		flag: true,
	},
	{
		name: "Gonorrhea",
		symptoms: [
			"PAINFUL URINATION",
			"DISCHARGE",
			"PAIN DURING INTERCOURSE",
			"SWOLLEN TESTICLES",
		],
		description:
			"A sexually transmitted bacterial infection that, if untreated, may cause infertility, presenting with symptoms like painful urination, discharge, pain during intercourse, and swollen testicles.",
		flag: true,
	},
	{
		name: "Chlamydia",
		symptoms: [
			"PAINFUL URINATION",
			"DISCHARGE",
			"LOWER ABDOMINAL PAIN",
			"PAIN DURING INTERCOURSE",
		],
		description:
			"A common sexually transmitted infection caused by bacteria, often presenting with painful urination, discharge, lower abdominal pain, and pain during intercourse.",
		flag: true,
	},
	{
		name: "Herpes Simplex",
		symptoms: [
			"PAINFUL BLISTERS",
			"SORES",
			"ITCHING",
			"FEVER",
			"SWOLLEN LYMPH NODES",
		],
		description:
			"A viral infection causing painful blisters and sores, often around the mouth or genitals, accompanied by itching, fever, and swollen lymph nodes.",
		flag: true,
	},
	{
		name: "Human Papillomavirus (HPV)",
		symptoms: ["WARTS", "GENITAL WARTS", "ITCHING", "BLEEDING WARTS"],
		description:
			"A viral infection causing warts on different parts of the body, including the genitals, often presenting with symptoms like warts, genital warts, itching, and bleeding warts.",
		flag: true,
	},
	{
		name: "Ebola",
		symptoms: [
			"FEVER",
			"SEVERE HEADACHE",
			"MUSCLE PAIN",
			"WEAKNESS",
			"FATIGUE",
			"DIARRHEA",
			"VOMITING",
			"ABDOMINAL PAIN",
		],
		description:
			"A rare and deadly disease caused by infection with one of the Ebola virus strains, characterized by fever, severe headache, muscle pain, weakness, fatigue, diarrhea, vomiting, and abdominal pain.",
		flag: true,
	},
	{
		name: "Zika Virus",
		symptoms: [
			"FEVER",
			"RASH",
			"JOINT PAIN",
			"CONJUNCTIVITIS",
			"MUSCLE PAIN",
			"HEADACHE",
		],
		description:
			"A mosquito-borne virus causing mild symptoms such as fever, rash, joint pain, conjunctivitis, muscle pain, and headache, but can cause severe birth defects if contracted during pregnancy.",
		flag: true,
	},
	{
		name: "Dengue Fever",
		symptoms: [
			"HIGH FEVER",
			"SEVERE HEADACHE",
			"PAIN BEHIND THE EYES",
			"JOINT PAIN",
			"MUSCLE PAIN",
			"SKIN RASH",
			"NAUSEA",
			"VOMITING",
		],
		description:
			"A mosquito-borne viral infection causing flu-like symptoms such as high fever, severe headache, pain behind the eyes, joint and muscle pain, skin rash, nausea, and vomiting.",
		flag: true,
	},
	{
		name: "Malaria",
		symptoms: [
			"FEVER",
			"CHILLS",
			"HEADACHE",
			"NAUSEA",
			"VOMITING",
			"MUSCLE PAIN",
			"FATIGUE",
		],
		description:
			"A life-threatening disease caused by parasites transmitted to humans through the bites of infected mosquitoes, presenting with symptoms such as fever, chills, headache, nausea, vomiting, muscle pain, and fatigue.",
		flag: true,
	},
	{
		name: "Lyme Disease",
		symptoms: [
			"RASH",
			"FEVER",
			"CHILLS",
			"HEADACHE",
			"FATIGUE",
			"MUSCLE AND JOINT ACHES",
			"SWOLLEN LYMPH NODES",
		],
		description:
			"A bacterial infection transmitted by tick bites, causing symptoms like a rash (often in a bull's-eye pattern), fever, chills, headache, fatigue, muscle and joint aches, and swollen lymph nodes.",
		flag: true,
	},
	{
		name: "Rabies",
		symptoms: [
			"FEVER",
			"HEADACHE",
			"EXCESSIVE SALIVATION",
			"MUSCLE SPASMS",
			"PARALYSIS",
			"MENTAL CONFUSION",
		],
		description:
			"A deadly virus spread to people from the saliva of infected animals, causing symptoms such as fever, headache, excessive salivation, muscle spasms, paralysis, and mental confusion.",
		flag: true,
	},
	{
		name: "West Nile Virus",
		symptoms: [
			"FEVER",
			"HEADACHE",
			"BODY ACHES",
			"SKIN RASH",
			"SWOLLEN LYMPH NODES",
		],
		description:
			"A mosquito-borne virus causing symptoms such as fever, headache, body aches, skin rash, and swollen lymph nodes. In severe cases, it can affect the nervous system.",
		flag: true,
	},
	{
		name: "Yellow Fever",
		symptoms: [
			"FEVER",
			"HEADACHE",
			"JAUNDICE",
			"MUSCLE PAIN",
			"NAUSEA",
			"VOMITING",
		],
		description:
			"A viral infection spread by mosquitoes, causing symptoms like fever, headache, jaundice, muscle pain, nausea, and vomiting.",
		flag: true,
	},
	{
		name: "Polio",
		symptoms: [
			"FEVER",
			"FATIGUE",
			"HEADACHE",
			"VOMITING",
			"STIFFNESS IN THE NECK",
			"PAIN IN THE LIMBS",
		],
		description:
			"A viral disease that can affect nerves and lead to partial or full paralysis, presenting with symptoms like fever, fatigue, headache, vomiting, stiffness in the neck, and pain in the limbs.",
		flag: true,
	},
	{
		name: "Measles",
		symptoms: [
			"FEVER",
			"DRY COUGH",
			"RUNNY NOSE",
			"SORE THROAT",
			"INFLAMED EYES",
			"SKIN RASH",
		],
		description:
			"A highly contagious viral disease causing fever, dry cough, runny nose, sore throat, inflamed eyes, and a skin rash.",
		flag: true,
	},
	{
		name: "Mumps",
		symptoms: [
			"SWOLLEN SALIVARY GLANDS",
			"FEVER",
			"HEADACHE",
			"MUSCLE ACHES",
			"FATIGUE",
		],
		description:
			"A viral infection primarily affecting the salivary glands, causing symptoms such as swollen salivary glands, fever, headache, muscle aches, and fatigue.",
		flag: true,
	},
	{
		name: "Rubella",
		symptoms: [
			"FEVER",
			"RASH",
			"SWOLLEN LYMPH NODES",
			"RUNNY NOSE",
			"RED EYES",
		],
		description:
			"A contagious viral infection preventable by vaccine, known for its distinctive red rash, fever, swollen lymph nodes, runny nose, and red eyes.",
		flag: true,
	},
	{
		name: "Tetanus",
		symptoms: [
			"MUSCLE STIFFNESS",
			"MUSCLE SPASMS",
			"FEVER",
			"SWEATING",
			"RAPID HEART RATE",
		],
		description:
			"A serious bacterial infection causing muscle stiffness and spasms, fever, sweating, and a rapid heart rate, often linked to wound contamination.",
		flag: true,
	},
	{
		name: "Pertussis",
		symptoms: [
			"SEVERE COUGHING",
			"RUNNY NOSE",
			"NASAL CONGESTION",
			"SNEEZING",
			"FEVER",
		],
		description:
			"A highly contagious respiratory tract infection characterized by severe coughing fits, runny nose, nasal congestion, sneezing, and fever.",
		flag: true,
	},
	{
		name: "Chickenpox",
		symptoms: [
			"ITCHY RASH",
			"BLISTERS",
			"FEVER",
			"FATIGUE",
			"LOSS OF APPETITE",
		],
		description:
			"A highly contagious viral infection causing an itchy, blister-like rash, fever, fatigue, and loss of appetite.",
		flag: true,
	},
	{
		name: "Influenza",
		symptoms: [
			"FEVER",
			"COUGH",
			"SORE THROAT",
			"MUSCLE ACHES",
			"HEADACHE",
			"FATIGUE",
		],
		description:
			"A contagious respiratory illness caused by influenza viruses, presenting with symptoms such as fever, cough, sore throat, muscle aches, headache, and fatigue.",
		flag: true,
	},
];
