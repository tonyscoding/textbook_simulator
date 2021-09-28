input_file = open("color_scripter_converter/input.txt", 'r')
import_file = open("color_scripter_converter/import.txt", 'r')
output_file = open("color_scripter_converter/output.txt", 'w')

words=['PN"','pn"','title','images','name','src','description','"description"s','content','step_"title"','step_no','step_items','collapse','"description"_"title"','sub_"content"','textbook_"title"','textbook_sub"title"','textbook_"content"s']
words2=['PNG"','png"','"title"','"images"','"name"','"src"','"description"','"descriptions"','"content"','"step_title"','"step_no"','"step_items"','"collapse"','"description_title"','"sub_content"','"textbook_title"','"textbook_subtitle"','"textbook_contents"']

title = input()

script = input_file.read()
while True :
  line = import_file.readline()
  if not line : break
  if line[:6] == 'import' :
    name = line[7:].split(' from ')
    print(name[0], name[1][6:-2])
    script = script.replace(name[0], '"'+title+name[1][6:-3]+'"',100 if name[0]=="NoImage" else 1)


for i in range(len(words)) :
  print(i)
  script = script.replace(words[i],words2[i])
    
#print(script)

while i<len(script) :
  if script[i] == '}' or  script[i] == ']':
    index = i-1
    while script[index] != '"' and script[index] != ']' and script[index] != '}':
      index-=1
    if script[index+1] == ',': 
      script = script[:index+1] + script[index+2:]
      i-=1
  i+=1
'''
script = """{
  "textbook_title": "클래스2",
  "textbook_subtitle": {
    "stage": "BASIC",
    "language": "PYTHON",
    "level": "1"
  },
  "textbook_summary": {
    "summary_text": "<p>자바에서의 클래스를 공부해봅시다.</p>"
  },
  "textbook_contents": [
    {""" + script
'''
output_file.write(script)

input_file.close()
output_file.close()
import_file.close()

# script = input_file.read()
# script = script.replace("td style=\"padding:6px 0;","td style=\"padding:6px 0;width:100%;")
# script = script.replace("<a href=\"http://colorscripter.com/info#e\" target=\"_blank\" style=\"text-decoration:none;color:white\"><span style=\"font-size:9px;word-break:normal;background-color:#4f4f4f;color:white;border-radius:10px;padding:1px\">cs</span></a>","")
# script = script.replace("<a href=\"http://colorscripter.com/info#e\" target=\"_blank\" style=\"color:#4f4f4ftext-decoration:none\">Colored by Color Scripter</a>","")
# script = script.replace("\"","\\\"")

# print(script)

# output_file.write(script)

# input_file.close()
# output_file.close()

