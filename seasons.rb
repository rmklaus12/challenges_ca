print "What day is it?"
day = gets.chomp.to_i

# seasons = {
#     winter: (1..59) + (339..366).to_a
#     spring: (60..151).to_a
#     summer: (152..244).to_a
#     autumn: (245..338).to_a
# }

case day
when (1..59) + (339..366)
    return winter
when (60..151)
    return spring
when (152..244)
    return summer
when (45..338)
    return autumn
end