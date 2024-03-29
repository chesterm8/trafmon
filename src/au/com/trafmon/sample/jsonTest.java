package au.com.trafmon.sample;

import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.List;

import au.com.trafmon.DataPoint;
import au.com.trafmon.DataPointSet;
import au.com.trafmon.DataPoint.Layer;

public class jsonTest {

	/**
	 * 
	 * This class was written to test the toJSON method in DataPointSet
	 * 
	 * @author schester
	 * @param args
	 */
	public static void main(String[] args) {
		
		DataPointSet dpSet = new DataPointSet();
		
		DataPoint dp1 = new DataPoint(-37.8, 144.9, 1, 10, "Sweet", new GregorianCalendar(), Layer.CAR);
		DataPoint dp2 = new DataPoint(-37.9, 144.8, 2, 2, null, new GregorianCalendar(), Layer.CAR);
		DataPoint dp3 = new DataPoint(-38, 145, 1, 5, null, new GregorianCalendar(), Layer.CAR);
		DataPoint dp4 = new DataPoint(-38.4, 144.961077, 4, 5, null, new GregorianCalendar(), Layer.CAR);
		DataPoint dp5 = new DataPoint(-37.0, 144.961077, 1, 8, null, new GregorianCalendar(), Layer.CAR);

		List<DataPoint> dps = new ArrayList<DataPoint>();
		
		dps.add(dp1);
		dps.add(dp2);
		dps.add(dp3);
		dps.add(dp4);
		dps.add(dp5);
		
		dpSet.setDataPoints(dps);
		
		System.out.println(dpSet.toJSON());

	}

}
