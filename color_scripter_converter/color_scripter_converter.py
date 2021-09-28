input_file = open("color_scripter_converter/input.txt", 'r')
output_file = open("color_scripter_converter/output.txt", 'w')


script = input_file.read()
script = script.replace("td style=\"padding:6px 0;","td style=\"padding:6px 0;width:100%;")
script = script.replace("<a href=\"http://colorscripter.com/info#e\" target=\"_blank\" style=\"text-decoration:none;color:white\"><span style=\"font-size:9px;word-break:normal;background-color:#4f4f4f;color:white;border-radius:10px;padding:1px\">cs</span></a>","")
script = script.replace("<a href=\"http://colorscripter.com/info#e\" target=\"_blank\" style=\"color:#4f4f4ftext-decoration:none\">Colored by Color Scripter</a>","")
script = script.replace("\"","\\\"")

print(script)

output_file.write(script)

input_file.close()
output_file.close()

