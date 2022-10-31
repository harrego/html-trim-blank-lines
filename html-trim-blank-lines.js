function htmlTrimBlankLines(html) {
	// state variables
	var lines = []
	var buffer = ""
	var tagBuffer = ""
	var openingTag = false
	var closingTag
	var filterSkip = false
	
	// main loop
	for (const c of html.split("")) {
		buffer += c
		if (c == "\n") {
			var whitespaceLine = true
			for (const bufC of buffer.split("")) {
				if (bufC != " " && bufC != "\n") {
					whitespaceLine = false
					break
				}
			}
			if (!whitespaceLine || filterSkip)
				lines.push(buffer)
			buffer = ""
		} else if (c == "<") {
			tagBuffer = ""
			openingTag = true
		} else if (c == ">") {
			if (openingTag) {
				if (tagBuffer == "pre")
					filterSkip = true
			} else if (closingTag) {
				if (tagBuffer == "pre")
					filterSkip = false
			}
			openingTag = false
			closingTag = false
		} else if (openingTag) {
			if (c == "/" && tagBuffer.length == 0) {
				openingTag = false
				closingTag = true
			} else {
				tagBuffer += c
			}
		} else if (closingTag) {
			tagBuffer += c
		}
	}
	return lines.join("")
}
exports.htmlTrimBlankLines = htmlTrimBlankLines