const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test('한 번 이상 호출?', () => {
	expect(mockFn).toBeCalled();
});

test('정확히 세 번 호출?', () => {
	expect(mockFn).toBeCalledTimes(3);
});

test('10이랑 20이랑 같은 결과?', () => {
	expect(mockFn).toBeCalledWith(30, 40);
});

test('마지막 함수는 30일아 40 받았음?', () => {
	expect(mockFn).lastCalledWith(10, 20);
});
