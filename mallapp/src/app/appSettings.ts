export class AppSettings{

	
	//Local
	//  public static API_BASE = "http://localhost/ag7dev/api";	
	//  public static IMAGE_BASE = "http://localhost/ag7dev/api/mallproduct_image/";
	//Live server

	public static API_BASE = "https://3abc7.com/api";	
	public static IMAGE_BASE = "https://3abc7.com/api/mallproduct_image/";
	 


	//  public static IMAGE_BASE = "https://roodabatoz.com/api/mallproduct_image/";

	public static getmallproductDetail = AppSettings.API_BASE + "/getmallproduct"; 
	public static getshopmallproduct = AppSettings.API_BASE + "/getshopmallproduct"; 
	public static getmalllist = AppSettings.API_BASE + "/getmalllist"; 
	public static getmallshoplist=AppSettings.API_BASE+'/getmallshoplist';
	public static getfloorlist=AppSettings.API_BASE+'/getfloor';
	public static getshopbymallidfloorid=AppSettings.API_BASE+'/getshopbymallidfloorid';
	public static addOrder=AppSettings.API_BASE+'/createorder';
	
	
}
