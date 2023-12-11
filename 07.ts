type PrependText = "good_" 

type ObjectT = {
	[k: string]: any
}

type AppendGood<T extends ObjectT> = {
	[K in keyof T & string as `${PrependText}${K}`]: T[K]
}; 
 
