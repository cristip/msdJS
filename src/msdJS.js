//  usage 
//  var speechPart = msdJS.decode("Ncfsrnn", "en_US")
//  Copyright (c) 2014, Cristi Parascan <cristi.parascan@gmail.com>
//  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
//  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

var msdJS = {
	separator:", ",
	getTypes:function(){
		var types = {
			N:{
				ro_RO:"Substantiv",
				en_US:"Noun",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					c:{
						ro_RO:"comun",
						en_US:"common"
					},
					p:{
						ro_RO:"propriu",
						en_US:"proper"
					}
				},
				2:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				3:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				4:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					},
					v:{
						ro_RO:"vocativ",
						en_US:"vocative"
					}
				},
				5:{
					ro_RO:"Hotarât",
					en_US:"Definiteness",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				},
				6:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			V:{
				ro_RO:"Verb",
				en_US:"Verb",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					m:{
						ro_RO:"principal",
						en_US:"main"
					},
					a:{
						ro_RO:"auxiliar",
						en_US:"auxiliary"
					},
					o:{
						ro_RO:"modal",
						en_US:"modal"
					},
					c:{
						ro_RO:"copulativ",
						en_US:"copulative"
					}
				},
				2:{
					ro_RO:"forma",
					en_US:"VForm",
					i:{
						ro_RO:"indicativ",
						en_US:"indicative"
					},
					s:{
						ro_RO:"subjunctiv",
						en_US:"subjunctive"
					},
					m:{
						ro_RO:"impertativ",
						en_US:"impertative"
					},
					n:{
						ro_RO:"infinitiv",
						en_US:"infinitive"
					},
					p:{
						ro_RO:"participiu",
						en_US:"participle"
					},
					g:{
						ro_RO:"gerunziu",
						en_US:"gerund"
					}
				},
				3:{
					ro_RO:"timp",
					en_US:"tense",
					p:{
						ro_RO:"prezent",
						en_US:"present"
					},
					i:{
						ro_RO:"imperfect",
						en_US:"imperfect"
					},
					s:{
						ro_RO:"trecut",
						en_US:"past"
					},
					l:{
						ro_RO:"mai mult ca perfect",
						en_US:"plusperfect"
					}
				},
				4:{
					ro_RO:"Persoana",
					en_US:"Person",
					1:{
						ro_RO:"întâi",
						en_US:"first"
					},
					2:{
						ro_RO:"a doua",
						en_US:"second"
					},
					3:{
						ro_RO:"a treia",
						en_US:"third"
					}
				},
				5:{
					ro_RO:"Numar",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				6:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				10:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			A:{
				ro_RO:"Adjectiv",
				en_US:"Adjective",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					f:{
						ro_RO:"calificativ",
						en_US:"qualificative"
					}
				},
				2:{
					ro_RO:"Grad",
					en_US:"Degree",
					p:{
						ro_RO:"pozitiv",
						en_US:"positive"
					},
					c:{
						ro_RO:"comparativ",
						en_US:"comparative"
					},
					s:{
						ro_RO:"superlativ",
						en_US:"superlative"	
					}
				},
				3:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				4:{
					ro_RO:"Numar",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				5:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					},
					v:{
						ro_RO:"vocativ",
						en_US:"vocative"
					}
				},
				6:{
					ro_RO:"Hotarât",
					en_US:"Definiteness",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				},
				7:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			P:{
				ro_RO:"Pronume",
				en_US:"Pronoun",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					d:{
						ro_RO:"demonstrativ",
						en_US:"demonstrative"
					},
					i:{
						ro_RO:"nedefinit",
						en_US:"indefinite"
					},
					s:{
						ro_RO:"posesiv",
						en_US:"possesive"
					},
					w:{
						ro_RO:"rel",
						en_US:"int rel"
					},
					p:{
						ro_RO:"personal",
						en_US:"personal"
					},
					x:{
						ro_RO:"reflexiv",
						en_US:"reflexive"
					},
					z:{
						ro_RO:"negativ",
						en_US:"negative"
					},
					h:{
						ro_RO:"categoric",
						en_US:"emphatic"
					}
				},
				2:{
					ro_RO:"Persoana",
					en_US:"Person",
					1:{
						ro_RO:"întâi",
						en_US:"first"
					},
					2:{
						ro_RO:"a doua",
						en_US:"second"
					},
					3:{
						ro_RO:"a treia",
						en_US:"third"
					}
				},
				3:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				4:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				5:{
					ro_RO:"Caz",
					en_US:"Case",
					n:{
						ro_RO:"nominativ",
						en_US:"nominative"
					},
					g:{
						ro_RO:"genitiv",
						en_US:"genitive"
					},
					d:{
						ro_RO:"dativ",
						en_US:"dative"
					},
					a:{
						ro_RO:"acuzativ",
						en_US:"acuzative"
					},
					v:{
						ro_RO:"vocativ",
						en_US:"vocative"
					},
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					}
				},
				6:{
					ro_RO:"Număr propriu",
					en_US:"Owner Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				8:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				},
				14:{
					ro_RO:"forma",
					en_US:"Pron-Form",
					s:{
						ro_RO:"tare",
						en_US:"strong"
					},
					w:{
						ro_RO:"slaba",
						en_US:"weak"
					}
				}
			},
			D:{
				ro_RO:"Determinant",
				en_US:"Determiner",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					d:{
						ro_RO:"demonstrativ",
						en_US:"demonstrative"
					},
					i:{
						ro_RO:"nedefinit",
						en_US:"indefinite"
					},
					s:{
						ro_RO:"posesiv",
						en_US:"possesive"
					},
					w:{
						ro_RO:"rel",
						en_US:"int rel"
					},
					z:{
						ro_RO:"negativ",
						en_US:"negative"
					},
					h:{
						ro_RO:"categoric",
						en_US:"emphatic"
					}
				},
				2:{
					ro_RO:"Persoana",
					en_US:"Person",
					1:{
						ro_RO:"întâi",
						en_US:"first"
					},
					2:{
						ro_RO:"a doua",
						en_US:"second"
					},
					3:{
						ro_RO:"a treia",
						en_US:"third"
					}
				},
				3:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				4:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				5:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					}
				},
				6:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				8:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				},
				9:{
					ro_RO:"Modific Tip",
					en_US:"Modific Type",
					e:{
						ro_RO:"prenominal",
						en_US:"prenominal"
					},
					o:{
						ro_RO:"postnominal",
						en_US:"postnominal"
					}
				}
			},
			T:{
				ro_RO:"Articol",
				en_US:"Article",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					f:{
						ro_RO:"definit",
						en_US:"definite"
					},
					i:{
						ro_RO:"nedefinit",
						en_US:"indefinite"
					},
					s:{
						ro_RO:"posesiv",
						en_US:"possesive"
					},
					d:{
						ro_RO:"demonstrativ",
						en_US:"demonstrative"
					}
				},
				2:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				3:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				4:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					}
				},
				5:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			R:{
				ro_RO:"Adverb",
				en_US:"Adverb",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					g:{
						ro_RO:"general",
						en_US:"general"
					},
					p:{
						ro_RO:"particulă",
						en_US:"particle"
					},
					z:{
						ro_RO:"negativ",
						en_US:"negative"
					},
					m:{
						ro_RO:"modificator",
						en_US:"modifier"
					},
					w:{
						ro_RO:"rel",
						en_US:"int rel"
					},
					c:{
						ro_RO:"portmanteau",
						en_US:"portmanteau"
					}
				},
				2:{
					ro_RO:"Grad",
					en_US:"Degree",
					p:{
						ro_RO:"pozitiv",
						en_US:"positive"
					},
					c:{
						ro_RO:"comparativ",
						en_US:"comparative"
					},
					s:{
						ro_RO:"superlativ",
						en_US:"superlative"	
					}
				},
				3:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			S:{
				ro_RO:"Prepoziție",
				en_US:"Adposition",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					p:{
						ro_RO:"prepoziție",
						en_US:"preposition"
					}
				},
				2:{
					ro_RO:"Formă",
					en_US:"Formation",
					s:{
						ro_RO:"simplă",
						en_US:"simple"
					},
					c:{
						ro_RO:"compusă",
						en_US:"compound",
					}
				},
				3:{
					ro_RO:"Caz",
					en_US:"Case",
					g:{
						ro_RO:"genitiv",
						en_US:"genitive"
					},
					d:{
						ro_RO:"dativ",
						en_US:"dative"
					}
				},
				4:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			C:{
				ro_RO:"Conjunție",
				en_US:"Conjunction",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					c:{
						ro_RO:"coordonare",
						en_US:"coordinating"
					},
					s:{
						ro_RO:"subordonare",
						en_US:"subordonating"
					}
				},
				2:{
					ro_RO:"Formă",
					en_US:"Formation",
					s:{
						ro_RO:"simplă",
						en_US:"simple"
					},
					c:{
						ro_RO:"compusă",
						en_US:"compound",
					}
				},
				3:{
					ro_RO:"Tip coordonare",
					en_US:"Coord Type",
					s:{
						ro_RO:"simplă",
						en_US:"simple"
					},
					r:{
						ro_RO:"repetit",
						en_US:"repetit",
					},
					c:{
						ro_RO:"corelată",
						en_US:"corelat"
					}
				},
				4:{
					ro_RO:"Subtip",
					en_US:"Sub-Type",
					z:{
						ro_RO:"negativ",
						en_US:"negative"
					},
					p:{
						ro_RO:"pozitiv",
						en_US:"positive"
					}
				},
				5:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			M:{
				ro_RO:"Numeral",
				en_US:"Numeral",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					c:{
						ro_RO:"cardinal",
						en_US:"cardinal"
					},
					o:{
						ro_RO:"ordinal",
						en_US:"ordinal"
					},
					f:{
						ro_RO:"fractal",
						en_US:"fractal"
					},
					m:{
						ro_RO:"multiplu",
						en_US:"multiple"
					},
					l:{
						ro_RO:"collect",
						en_US:"collect"
					}
				},
				2:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				3:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				4:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					}
				},
				5:{
					ro_RO:"Formă",
					en_US:"From",
					d:{
						ro_RO:"digit",
						en_US:"digit"
					},
					l:{
						ro_RO:"literă",
						en_US:"letter"
					},
					b:{
						ro_RO:"ambele",
						en_US:"both"
					},
					r:{
						ro_RO:"roman",
						en_US:"roman"
					}
				},
				6:{
					ro_RO:"Hotarât",
					en_US:"Definiteness",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				},
				7:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			Y:{
				ro_RO:"Abreviere",
				en_US:"Abbreviation",
				1:{
					ro_RO:"Tip Sintactic",
					en_US:"Syntactic-Type",
					n:{
						ro_RO:"nominal",
						en_US:"nominal"
					},
					v:{
						ro_RO:"verbal",
						en_US:"verbal"
					},
					a:{
						ro_RO:"adjectival",
						en_US:"adjectival"
					},
					r:{
						ro_RO:"adverbial",
						en_US:"adverbial"
					},
					p:{
						ro_RO:"pronomial",
						en_US:"pronomial"
					}
				},
				2:{
					ro_RO:"Gen",
					en_US:"Gender",
					m:{
						ro_RO:"masculin",
						en_US:"masculine"
					},
					f:{
						ro_RO:"feminin",
						en_US:"feminine"
					}
				},
				3:{
					ro_RO:"Număr",
					en_US:"Number",
					s:{
						ro_RO:"singular",
						en_US:"singular"
					},
					p:{
						ro_RO:"plural",
						en_US:"plural"
					}
				},
				4:{
					ro_RO:"Caz",
					en_US:"Case",
					r:{
						ro_RO:"direct",
						en_US:"direct"
					},
					o:{
						ro_RO:"oblic",
						en_US:"oblique"
					}
				},
				5:{
					ro_RO:"Hotarât",
					en_US:"Definiteness",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			Q:{
				ro_RO:"Particulă",
				en_US:"Particle",
				1:{
					ro_RO:"Tip",
					en_US:"Type",
					z:{
						ro_RO:"negație",
						en_US:"negation"
					},
					n:{
						ro_RO:"infinitiv",
						en_US:"infinitive"
					},
					s:{
						ro_RO:"subjunctiv",
						en_US:"subjunctive"
					},
					a:{
						ro_RO:"aspect",
						en_US:"aspect"
					},
					f:{
						ro_RO:"viitor",
						en_US:"future"
					}
				},
				3:{
					ro_RO:"Clitic",
					en_US:"Clitic",
					y:{
						ro_RO:"da",
						en_US:"yes"
					},
					n:{
						ro_RO:"nu",
						en_US:"no"
					}
				}
			},
			I:{
				ro_RO:"Interjecție",
				en_US:"Interjection"
			},
			X:{
				ro_RO:"Rezidual",
				en_US:"Residual"
			}

		};
		return types;
	},
	getSupportedLocales:function()
	{
		return ["ro_RO","en_US"];
	},
	/**
	 * @Description Decodes value for selected locale
	 * @param value: String, the MSD encoded value e.g.: Ncfsrnn
	 * @param locale: one of the supported locales, default ro_RO
	 * @return String, the human readable decoded value
	 * @see separator, getSupportedLocales
	 */
	decode:function(value, locale)
	{
		if(null == locale)
		{
			locale = "ro_RO";
		}
		var types = this.getTypes();
		var type = value.charAt(0);
		if(!types.hasOwnProperty(type)){
			return "";
		}
		var decoded = types[type][locale];
		var index = 1;
		while(index < value.length)
		{
			var currentChar = value.charAt(index)
			if(currentChar == "-")
			{
				continue;
			}
			try{
				decoded += this.separator + types[type][index][locale] +": " + types[type][index][currentChar][locale];
			}catch(e)
			{
				if(console && console.log){
					console.log("Could not match " + currentChar + " at index " + index + " for " + value + ": " + decoded)
					return decoded;
				}
			}
			
			index++;

		}
		return decoded;
	}
}