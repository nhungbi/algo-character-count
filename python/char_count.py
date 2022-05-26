def count_char(input_string):
	"""
	Given a string, return a dictonary with its character as keys
	and values as the number of times the character shows up in the string.
	"""
	string_ = [char for char in input_string if char != ' ']
	char_dict = {}
	for char in string_:
		if char in char_dict:
			char_dict[char] +=1
		else:
			char_dict[char] = 1 #if not in dict, then add an entry with value 1

	return char_dict

def char_count(string):
  """
  Given a str, return a list with [[char, number of occurences]]
  for each char. The list should be in increasing number of occurences,
  if 
  """
  dict_char = count_char(string) #dict of char as key with value as number of occurences
  list_tup_char = sorted(dict_char.items(), key = lambda item: item[1], reverse= True ) #sorted list of tuples
  list_char = [list(tup) for tup in list_tup_char]
  output = []

  same_value = []
  for i in range(len(list_char)-1):
    current_elt = list_char[i]
    next_elt = list_char[i+1]

    if current_elt[1] == next_elt[1]: #check to see if the next elt has the same value
      if current_elt in same_value: #current already in grouping
        same_value.append(next_elt)
      else: #want to group all the same values together to sort them based on alphabetical order
        same_value.append(current_elt)
        same_value.append(next_elt)
    else: #no longer same value
      sort_group = sorted(same_value, key = lambda item: item[0])
      output.extend(sort_group)

      if current_elt not in output:
        output.append(current_elt)

      same_value = []#reset group

  output.extend(sorted(same_value, key= lambda item: item[0])) #take care of last grouping
  if list_char[-1] not in output:
    output.append(list_char[-1])
  
  return output
      
