namespace TomKlonowski.DB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Blogs_Description : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Blogs", "Description", c => c.String(maxLength: 256));
            AlterColumn("dbo.Blogs", "Title", c => c.String(maxLength: 256));
            AlterColumn("dbo.Blogs", "Tags", c => c.String(maxLength: 256));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Blogs", "Tags", c => c.String());
            AlterColumn("dbo.Blogs", "Title", c => c.String());
            DropColumn("dbo.Blogs", "Description");
        }
    }
}
