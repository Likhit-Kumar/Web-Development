/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package TestDB;

/**
 *
 * @author likhi
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author gowrish
 */
public class Connectdb2 {
    public boolean checkpass(String uname, String upass)
    {
        System.out.println("Received " + uname + " " + upass);
            String url = "jdbc:oracle:thin:system/1234@localhost:1521:XE";
            Connection con = null;
            try
            {
                Class.forName("oracle.jdbc.OracleDriver");
                con= DriverManager.getConnection(url);                
                if(con != null)
                    System.out.println("Connected");
                else
                    System.out.println("Error in connection");
            
                PreparedStatement s = con.prepareStatement("select * from ORACLEDB.login_cred");
                ResultSet rs = s.executeQuery();
                System.out.println("Test " + rs.getFetchSize());
                while(rs.next())
                {                    
                    System.out.println("Comparing " + rs.getString(1) + "  " + uname);
                    if(rs.getString(1).toString().equals(uname.toString()))
                    {
                        System.out.println("username matched");
                        if(rs.getString(2).toString().equals(upass.toString()))
                        {
                            System.out.println("Matched");
                            return true;
                        }
                    }
                }   
                System.out.println("Username and Password dont match");
                return false;
            }
            catch(Exception e)
            {
                System.out.println("Exception " + e);
            }
            finally
            {
                try {
                    con.close();            
                }catch(Exception e) { System.out.println(e); }
            }    
            return false;
        }
    
public boolean register(String uname, String upass)
    {
        System.out.println("Received " + uname + " " + upass);
            String url = "jdbc:oracle:thin:SYSTEM/1234@localhost:1521:XE";
            Connection con = null;
            try
            {
                Class.forName("oracle.jdbc.OracleDriver");
                con= DriverManager.getConnection(url);                
                if(con != null)
                    System.out.println("Connected");
                else
                    System.out.println("Error in connection");
            
                PreparedStatement s = con.prepareStatement("select * from ORACLEDB.login_cred");
                ResultSet rs = s.executeQuery();
                System.out.println("Test " + rs.getFetchSize());
                while(rs.next())
                {                    
                    System.out.println("Comparing " + rs.getString(1) + "  " + uname);
                    if(rs.getString(1).toString().equals(uname.toString()))
                    {
                        System.out.println("username matched");
                        return false;
                    }
                }   
                s = con.prepareStatement("insert into ORACLEDB.login_cred values(?,?)");
                s.setString(1, uname);
                s.setString(2, upass);
                s.executeUpdate();
            }
            catch(Exception e)
            {
                System.out.println("Exception " + e);
            }
            finally
            {
                try {
                    con.close();            
                }catch(Exception e) { System.out.println(e); }
            }    
            return true;
        }
       
    }
