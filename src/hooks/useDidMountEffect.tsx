import { useEffect, useRef } from 'react';

// 화면 첫 랜더링시 실행을 막기위한 custom useEffect
const useDidMountEffect = (func: () => void, deps: any) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};

export default useDidMountEffect;
