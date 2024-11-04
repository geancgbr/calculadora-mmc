from rest_framework.decorators import api_view
from rest_framework.response import Response
from math import gcd

def lcm(a, b):
    return a * b // gcd(a, b)

@api_view(['GET'])
def calculate_lcm(request):
    try:
        x = int(request.GET.get('x'))
        y = int(request.GET.get('y'))

        if x <= 0 or y <= 0:
            return Response({'error': 'Os números devem ser inteiros positivos.'}, status=400)
        if x >= y:
            return Response({'error': 'O valor de x deve ser menor que y.'}, status=400)

        result = x
        for num in range(x + 1, y + 1):
            result = lcm(result, num)

        return Response({'lcm': result})
    except (TypeError, ValueError):
        return Response({'error': 'Parâmetros inválidos.'}, status=400)