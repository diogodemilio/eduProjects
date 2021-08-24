using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPF_01
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        //public Sum SumObj {  get; set; }
        public MainWindow()
        {
            InitializeComponent();
            //MySlider.Value = 30;
            //MyTextBox.Text = MySlider.Value.ToString();

            //SumObj = new Sum { Num1 = "1", Num2 = "2" };
            //this.DataContext = SumObj;

            // ListBox and a List of Current Matches

            //List<Match> matches = new List<Match>();
            //matches.Add(new Match() { Team1 = "Bayern Munich", Team2 = "Real Madrid", Score1 = 3, Score2 = 2, Completion = 85 });
            //matches.Add(new Match() { Team1 = "PSG", Team2 = "Barcelona", Score1 = 2, Score2 = 2, Completion = 55 });
            //matches.Add(new Match() { Team1 = "BVB Dortmund", Team2 = "AS Roma", Score1 = 1, Score2 = 2, Completion = 25 });
            //matches.Add(new Match() { Team1 = "Man United", Team2 = "LA Galaxy", Score1 = 0, Score2 = 2, Completion = 45 });
            //lbMatches.ItemsSource = matches;

            // ComboBox
            //comboBoxColors.ItemsSource = typeof(Colors).GetProperties();
        }


        //private void Button_Click(object sender, RoutedEventArgs e)
        //{
        //    MessageBox.Show("Thanks for clicking me");
        //}

        //private void Button_MouseUp(object sender, MouseButtonEventArgs e)
        //{
        //    MessageBox.Show("Mouse Button went up / was released - Bubbling Event");
        //}

        //private void Button_PreviewMouseUp(object sender, MouseButtonEventArgs e)
        //{
        //    MessageBox.Show("Mouse Button went up / was released - Tunneling Event");

        //}

        //private void Button_PreviewMouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        //{
        //    MessageBox.Show("Left Mouse Button went up / was released - Tunneling Event");

        //}

        // ListBox and a List of Current Matches

        //public class Match
        //{
        //    public int Score1 { get; set; }
        //    public int Score2 {  get; set; }
        //    public string Team1 {  get; set; }
        //    public string Team2 { get; set; }
        //    public int Completion { get; set; }
        //}

        //private void Button_Click(object sender, RoutedEventArgs e)
        //{
        //    if (lbMatches.SelectedItem !=  null)
        //    {
        //        MessageBox.Show("Selected Match: "
        //            + (lbMatches.SelectedItem as Match).Team1 + " "
        //            + (lbMatches.SelectedItem as Match).Score1 + " "
        //            + (lbMatches.SelectedItem as Match).Score2 + " "
        //            + (lbMatches.SelectedItem as Match).Team2
        //        );
        //    }
        //}

        // CheckBox
        //private void CbAllCheckedChanged(object sender, RoutedEventArgs e) 
        //{ 
        //    bool newValue = (cbAllTopings.IsChecked == true);
        //    cbSalami.IsChecked = newValue;
        //    cbMushrooms.IsChecked = newValue;
        //    cbMozzarella.IsChecked = newValue;
        //}


        //private void CbSingleCheckedChanged(object sender, RoutedEventArgs e)  
        //{
        //    cbAllTopings.IsChecked = null;

        //    if ((cbSalami.IsChecked == true) && (cbMushrooms.IsChecked == true) && (cbMozzarella.IsChecked == true))
        //        cbAllTopings.IsChecked = true;

        //    if ((cbSalami.IsChecked == false) && (cbMushrooms.IsChecked == false) && (cbMozzarella.IsChecked == false))
        //        cbAllTopings.IsChecked = false;
        //}  

        //RadioButton and Images
        //private void RadioButton_MaybeChecked(object sender, RoutedEventArgs e)
        //{
        //    MessageBox.Show("Please say yes!");
        //}

        //Password Box
        private void Login_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Welcome " + tbUsername.Text);
        }
    }
}
