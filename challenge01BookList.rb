books = ["Harry Potter", "Tales of the Bard", "The Twelve Kingdoms"]
authors = ["JK Rowling", "Michael Scott", "Fuyumi Ono"]
combined = []

index = 0
while index < books.length
    combined_text = "#{books[index]} by #{authors[index]}"
    combined.push(combined_text)
    index += 1
end

puts("Combined #{combined}")