#Depurame este codigo
# Este programa es un programa de Python intencionalmente defectuoso.
# El programa tiene un error de sintaxis y un error de lógica.
# El error de sintaxis es que falta un paréntesis en la línea 6.
# El error de lógica es que el programa no imprime las cartas correctamente.
# El programa debería imprimir cinco cartas, pero solo imprime cuatro cartas.
# Corrija los errores y ejecute el programa.
# ¿Qué cartas obtiene?
# Intentionally flawed Python program

# importing modules
import itertools, random

# make a deck of cards
deck = list(itertools.product(range(1, 14), ['Spade', 'Heart', 'Diamond', 'Club']))

# shuffle the cards
random.shuffle(deck)

# draw five cards
print("You got:")
for i in range(5):
    print(deck[i][0], "of", deck[i][1])
